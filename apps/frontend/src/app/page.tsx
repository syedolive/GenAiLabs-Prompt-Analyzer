import PromptComposer from "@/components/common/prompt_composer/prompt-composer"

export default function Home() {
  return (
    <section className="container mx-auto flex flex-1 flex-col gap-4 justify-end items-center-safe md:justify-center py-4 px-2 relative">
        <PromptComposer />
    </section>
  );
}
