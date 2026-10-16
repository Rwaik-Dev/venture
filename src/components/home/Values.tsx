import { valuePillars } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Values() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Missão, visão e valores"
          subtitle="O que guia cada linha, cada sede e cada colaborador da Venture."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {valuePillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className="group overflow-hidden rounded-2xl bg-canvas transition duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-brand">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
