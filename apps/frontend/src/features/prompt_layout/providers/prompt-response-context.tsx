"use client";
import { SinglePromptResponse } from "@/lib/network/dto/prompts-request.dto";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type PromptResponseContextValue = {
  data: SinglePromptResponse;
  responseLoadedComplete: boolean;
  responseComplete: () => void;
  startSse: (key: string, url: string) => EventSource;
  getSse: (key: string) => EventSource | undefined;
  stopSse: (key: string) => void;
};

const PromptResponseContext = createContext<PromptResponseContextValue | null>(
  null
);

type PromptResponseContextProviderProps = {
  children: React.ReactNode;
  data: SinglePromptResponse;
};

export function usePromptResponseContext() {
  const context = useContext(PromptResponseContext);
  if (context === null) {
    throw new Error(
      "usePromptResponseContext must be used within a PromptResponseContextProvider"
    );
  }
  return context;
}

export const PromptResponseContextProvider = ({
  children,
  data,
}: PromptResponseContextProviderProps) => {
  const [responseLoadedComplete, setResponseLoadedComplete] =
    useState<boolean>(false);
  const sseMap = useRef(new Map<string, EventSource>());
  useEffect(() => {
    return () => {
      sseMap.current.forEach((src) => {
        src.close();
      });
      sseMap.current.clear();
    };
  }, []);
  const startSse = useCallback((key: string, url: string) => {
    let src = sseMap.current.get(key);
    if (!src) {
      src = new EventSource(url);
      sseMap.current.set(key, src);
    }
    return src;
  }, []);

  const getSse = useCallback((key: string) => {
    return sseMap.current.get(key);
  }, []);

  const stopSse = useCallback((key: string) => {
    const src = sseMap.current.get(key);
    if (src) {
      src.close();
      sseMap.current.delete(key);
    }
  }, []);

  const responseComplete = useCallback(() => {
    setResponseLoadedComplete(true);
  }, [setResponseLoadedComplete]);

  return (
    <PromptResponseContext.Provider
      value={{
        data,
        responseLoadedComplete,
        startSse,
        getSse,
        stopSse,
        responseComplete,
      }}
    >
      {children}
    </PromptResponseContext.Provider>
  );
};
