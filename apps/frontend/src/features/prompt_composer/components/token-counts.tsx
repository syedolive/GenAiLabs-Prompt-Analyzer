import { InputGroupText } from "@/components/ui/input-group";
import { usePromptComposerContext } from "../providers/prompt-composer-context";
import { useTokenCounts } from "@/hooks/use-token-count";
import { useEffect } from "react";

export default function TokenCounts() {
  const { form } = usePromptComposerContext();
  const tokenCounts = useTokenCounts(form.watch("prompt"));
  useEffect(() => {
    form.setValue("tokens", tokenCounts);
  }, [tokenCounts, form]);
  return (
    <InputGroupText className="ml-auto">{tokenCounts} tokens</InputGroupText>
  );
}
