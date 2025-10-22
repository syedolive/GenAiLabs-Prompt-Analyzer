import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Response } from "@/lib/network/dto/prompts-request.dto";
import { Separator } from "@/components/ui/separator";
import { usePromptResponseContext } from "../providers/prompt-response-context";
import { SSE_PROMPT_URL } from "@/lib/network";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import type { VFile } from "vfile";
import { CopyToClipboard } from "./copy-to-clipboard";
export function PromptResponseComponent({
  response,
  responseCount,
}: {
  response: Response;
  responseCount: number;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const textRef = useRef<HTMLSpanElement>(null);
  const mdxContainerRef = useRef<HTMLDivElement>(null);
  const mdxBufferRef = useRef<string>("");
  const mdxFile = useRef<VFile>(null);
  const { startSse, stopSse, getSse } = usePromptResponseContext();
  const { profile } = response;
  useEffect(() => {
    if (response.response !== null) {
      return;
    }
    let sse = getSse(response.id);
    if (!sse) {
      sse = startSse(response.id, SSE_PROMPT_URL(response.id));
    }
    sse.addEventListener("open", _onMessageOpen);
    sse.addEventListener("chunk", _onMessageChunk);
    sse.addEventListener("completed", _onMessageCompleted);
    sse.addEventListener("failed", _onMessageFailed);
    sse.onerror = _onMessageError;
    return () => {
      sse.removeEventListener("open", _onMessageOpen);
      sse.removeEventListener("chunk", _onMessageChunk);
      sse.removeEventListener("completed", _onMessageCompleted);
      sse.removeEventListener("failed", _onMessageFailed);
      sse.onerror = null;
      stopSse(response.id);
    };
  }, [startSse, getSse, stopSse]);
  const _onMessageError = useCallback((e: Event) => {
    console.log(e);
  }, []);

  const _onMessageOpen = useCallback((e: MessageEvent) => {
    setIsLoading(true);
  }, []);
  const _onMessageChunk = useCallback((e: MessageEvent) => {
    console.log(`'SSE chunk received' ${e.data}`);
    if (textRef.current) {
      textRef.current.textContent += e.data;
      mdxBufferRef.current += e.data;
    }
  }, []);
  const _onMessageCompleted = useCallback(async (e: MessageEvent) => {
    console.log(`'SSE completed received' ${e.data}`);
    setIsLoading(false);
    stopSse(response.id);
    generateMdx();
  }, []);
  const generateMdx = useCallback(async () => {
    mdxFile.current = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, { behavior: "wrap" })
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(mdxBufferRef.current);
    if (mdxContainerRef.current && textRef.current) {
      mdxContainerRef.current.innerHTML = mdxFile.current.toString();
      textRef.current?.remove();
    }
  }, []);
  const _onMessageFailed = useCallback((e: MessageEvent) => {
    console.log(`'SSE failed received' ${e.data}`);
    setIsLoading(false);
  }, []);
  return (
    <div className="md:last:odd:col-span-2">
      <Card className="border-none shadow-none py-4 gap-1">
        <CardHeader className="!py-1">
          <CardTitle className="text-sm font-medium">
            <span className="text-muted-foreground">Profile</span>:{" "}
            {profile.profile_name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea
            className={`text-sm h-[200px] ${
              responseCount <= 2 ? "md:h-full" : ""
            }`}
          >
            <span ref={textRef} className="text-muted-foreground font-medium">
              {response.response !== null ? response.response : ""}
            </span>
            <div ref={mdxContainerRef} />
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center gap-1 mt-2">
          <span className="text-xs font-medium">
            temperature: {profile.temperature}
          </span>
          <Separator orientation="vertical" className="!h-4" />
          <span className="text-xs font-medium">top_p: {profile.top_p}</span>
          <Separator orientation="vertical" className="!h-4" />
          <span className="text-xs font-medium">top_k: {profile.top_k}</span>
          <Separator orientation="vertical" className="!h-4" />
          <CopyToClipboard text={mdxFile.current?.toString() || ""} />
        </CardFooter>
      </Card>
    </div>
  );
}

export const ResponseComponent = memo(PromptResponseComponent);
