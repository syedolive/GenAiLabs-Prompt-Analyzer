"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { usePromptResponseContext } from "@/features/prompt_layout/providers/prompt-response-context";
import { ResponseComponent } from "@/features/prompt_layout/components/prompt-response-component";
import { ChevronRight } from "lucide-react";
import Link from "next/link";



export default function PromptPage() {
  const {
    data: { responses, id },
    responseLoadedComplete,
  } = usePromptResponseContext();
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-14">
        {responses.map((response, index) => (
          <ResponseComponent
            key={response.id}
            response={response}
            responseCount={responses.length}
            index={index}
          />
        ))}
      </div>
      <div className="fixed bottom-3 right-3">
        <Button
          variant="secondary"
          size="lg"
          className="rounded-full"
          disabled={!responseLoadedComplete}
          asChild
        >
          {responseLoadedComplete ? (
            <Link href={`${id}/analysis`}>
              <span className="flex flex-row items-center gap-2 text-sm font-semibold">
                View Analysis <ChevronRight />
              </span>
            </Link>
          ) : (
            <div className="flex flex-row items-center gap-2">
              <Spinner />
              Waiting for prompts to load...
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}
