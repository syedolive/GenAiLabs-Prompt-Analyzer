"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
export function CopyToClipboard({ text }: { text: string }) {
  const _copyText = async () => {
    await navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard");
  };
  return (
    <Button onClick={_copyText} variant="ghost" size="icon-sm">
      <Copy className="size-4" />
    </Button>
  );
}
