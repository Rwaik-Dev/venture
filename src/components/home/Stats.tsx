import { companyStats } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  IconFleet,
  IconInvestment,
  IconOffices,
  IconPeople,
} from "@/components/ui/Icons";

const icons = {
  fleet: IconFleet,
  offices: IconOffices,
  investment: IconInvestment,
  people: IconPeople,
};

export function Stats() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="A Venture em números"
          subtitle="Frota, presença nacional, investimentos e as pessoas por trás do serviço."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat) => {
            const Icon = icons[stat.icon];
            return (
              <article
                key={stat.id}
                className="rounded-2xl bg-white p-6 transition hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-brand/10 p-3 text-brand">
                  <Icon />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {stat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {stat.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
