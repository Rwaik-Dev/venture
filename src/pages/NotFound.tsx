import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-canvas py-16">
      <Container className="text-center">
        <p className="font-display text-6xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-muted">
          O endereço que você tentou acessar não existe ou foi movido.
        </p>
        <Link to="/" className="mt-8 inline-block">
          <Button variant="primary">Voltar para a Home</Button>
        </Link>
      </Container>
    </section>
  );
}
