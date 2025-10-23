"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useFetchExport from "@/hooks/query_hooks/useFetchExport";
import { useParams } from "next/navigation";
import ReactJson from "@microlink/react-json-view";
import { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
export function ExportComponent({ children }: { children: React.ReactNode }) {
  const params = useParams<{ id: string }>();
  const { data, isLoading } = useFetchExport(params.id, true);
  const json = useMemo(() => {
    return data ?? {};
  }, [data]);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Copy this JSON export for future use and experiments
          </DialogTitle>
          <DialogDescription asChild>
            {isLoading ? (
              <Skeleton className="w-full h-full" />
            ) : (
              <ScrollArea className="h-[50dvh]">
                <ReactJson
                  src={json}
                  collapsed={1}
                  name={null}
                  enableClipboard={true}
                />
              </ScrollArea>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
