import marca from "@/assets/marca.png";
import { aboutStory } from "@/data/company";
import { Values } from "@/components/home/Values";
import { Testimonials } from "@/components/about/Testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SobreNos() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,193,155,0.35),_transparent_55%)]" />
        <Container className="relative">
          <div className="animate-fade-up mx-auto max-w-3xl text-center">
            <img
              src={marca}
              alt="Marca Venture Transporte"
              className="mx-auto mb-8 h-16 w-auto object-contain brightness-0 invert sm:h-20"
            />
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Sobre nós
            </h1>
            <p className="mt-4 text-base text-white/85 sm:text-lg">
              Desde 1980, conectando pessoas com segurança, confiança e
              acessibilidade em todo o Brasil.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Nossa trajetória"
            subtitle="Décadas de evolução — da frota local à presença nacional."
          />
          <ol className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {aboutStory.map((block) => (
              <li
                key={block.title}
                className="rounded-2xl border border-surface bg-canvas p-6"
              >
                <h3 className="font-display text-lg font-bold text-brand">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {block.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Values />
      <Testimonials />
    </>
  );
}
