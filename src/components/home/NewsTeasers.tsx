import { Link } from "react-router-dom";
import { newsItems } from "@/data/news";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function NewsTeasers() {
  const teasers = newsItems.slice(0, 3);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Últimas notícias"
          subtitle="Horários, tarifas e melhorias na operação — fique por dentro."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {teasers.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-surface bg-canvas"
            >
              <img
                src={item.img}
                alt=""
                className="aspect-[16/10] w-full bg-surface object-cover"
                loading="eager"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-muted">{item.summary}</p>
                <Link
                  to="/noticias"
                  className="mt-4 text-sm font-semibold text-brand-accent hover:underline"
                >
                  Ler na página de notícias
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/noticias">
            <Button variant="accent">Todas as notícias</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
