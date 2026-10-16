import { ComplaintForm } from "@/components/complaints/ComplaintForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Reclamacoes() {
  return (
    <section className="bg-canvas py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Reclamações"
          subtitle="Canal seguro para reportar problemas e sugerir melhorias. Nossa equipe lê cada mensagem."
        />
        <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center text-sm text-ink-muted sm:text-base">
          <p>
            Use o formulário abaixo para reclamações, elogios ou ideias. Quanto
            mais detalhes (linha, número do ônibus e ocorrido), mais rápido
            conseguimos ajudar.
          </p>
          <p className="font-medium text-ink">Obrigado por escolher a Venture.</p>
        </div>
        <ComplaintForm />
      </Container>
    </section>
  );
}
