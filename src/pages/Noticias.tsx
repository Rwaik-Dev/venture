import { newsItems } from "@/data/news";
import { NewsCard } from "@/components/news/NewsCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Noticias() {
  return (
    <section className="bg-canvas py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Notícias"
          subtitle="Atualizações sobre horários, tarifas, sedes e melhorias no serviço Venture."
          align="left"
        />
        <div className="flex flex-col gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
