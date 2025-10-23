import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getPrompt } from "@/lib/network";
import { ClipboardCopy, Copy } from "lucide-react";
import { notFound } from "next/navigation";
import dayjs from "dayjs";
import { PromptResponseContextProvider } from "@/features/prompt_layout/providers/prompt-response-context";
import { CopyToClipboard } from "@/features/prompt_layout/components/copy-to-clipboard";
type Params = Promise<{
  id: string;
}>;

export async function generateMetadata({ params }: { params: Params }) {
  const {id} = await params
  const { data } = await getPrompt(id);
  return {
    title: data.prompt,
    description: data.prompt,
  };
}

export default async function PromptLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { id } = await params;
  try {
    const { data } = await getPrompt(id);
    return (
      <div className="container mx-auto flex flex-1 flex-col px-2 relative py-4 gap-4">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardDescription className="text-sm">{data.prompt}</CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-row items-center justify-between">
            <div className="flex flex-1 flex-row items-center gap-2">
              <span className="text-xs text-muted-foreground font-semibold">
                {data.models[0].model.name}
              </span>
              <Separator orientation="vertical" className="h-2" />
              <span className="text-xs text-muted-foreground">
                {data.tokens} tokens
              </span>
              <Separator orientation="vertical" className="h-2" />
              <CopyToClipboard text={data.prompt} />
            </div>
            <span className="text-xs text-muted-foreground font-semibold">
              {dayjs(data.createdAt).format("MMM D, YYYY h:mm A")}
            </span>
          </CardFooter>
        </Card>
        <PromptResponseContextProvider data={data}>
          {children}
        </PromptResponseContextProvider>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}
