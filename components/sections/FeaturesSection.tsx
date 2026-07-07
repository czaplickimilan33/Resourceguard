import { features } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import Reveal from "@/components/ui/Reveal";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Funkcje"
          title="Wszystko, czego potrzebujesz w jednym miejscu."
          description="Ważne informacje nie powinny być ukryte w długich poradnikach. Każda funkcja ResourceGuard powstaje z myślą o tym, żeby działać wtedy, kiedy głowa nie działa idealnie."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 4) * 0.07}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
