import { HeroSection } from "@/components/home/hero-section";
import PromptComposer from "@/features/prompt_composer";
import { PromptComposerProvider } from "@/features/prompt_composer/providers/prompt-composer-context";
import { getModels, reactCache } from "@/lib/network";

export default async function Home() {
  const { data: models } = await getModels();
  return (
    <section className="container mx-auto flex flex-1 flex-col gap-4 items-center-safe md:justify-center py-4 px-2 relative ">
      <HeroSection />
      <PromptComposerProvider models={models}>
        <PromptComposer />
      </PromptComposerProvider>
    </section>
  );
}
