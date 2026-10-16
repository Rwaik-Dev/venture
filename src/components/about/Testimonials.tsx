import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="O que dizem nossos passageiros"
          subtitle="Depoimentos reais de quem usa a Venture no dia a dia."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.id} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-ink-muted">
                “{item.comment}”
              </p>
              <div className="mt-4 border-t border-surface pt-4">
                <p className="font-display font-semibold text-ink">{item.name}</p>
                <p className="text-xs text-ink-muted">
                  Cliente há {item.daysAsCustomer} dias
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
