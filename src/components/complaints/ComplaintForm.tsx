import { useState, type FormEvent } from "react";
import type { BusLine, ComplaintFormData } from "@/types";
import { Button } from "@/components/ui/Button";

const initialForm: ComplaintFormData = {
  nome: "",
  sobrenome: "",
  email: "",
  numeroOnibus: "",
  linha: "",
  message: "",
};

const lines: BusLine[] = ["Linha 1", "Linha 2", "Linha 3", "Linha 4"];

export function ComplaintForm() {
  const [form, setForm] = useState<ComplaintFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof ComplaintFormData>(
    key: K,
    value: ComplaintFormData[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl bg-brand/10 p-8 text-center"
        role="status"
        data-testid="complaint-success"
      >
        <h3 className="font-display text-xl font-bold text-brand-dark">
          Reclamação enviada com sucesso
        </h3>
        <p className="mt-2 text-ink-muted">
          Nossa equipe lerá sua mensagem e retornará o mais rápido possível.
        </p>
        <Button
          className="mt-6"
          variant="primary"
          onClick={() => setSubmitted(false)}
        >
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-surface bg-canvas px-4 py-2.5 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";

  return (
    <form
      name="formReclamacao"
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-xl space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-surface sm:p-8"
    >
      <div>
        <label htmlFor="nome" className="text-sm font-semibold text-ink">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          value={form.nome}
          onChange={(e) => updateField("nome", e.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="sobrenome" className="text-sm font-semibold text-ink">
          Sobrenome
        </label>
        <input
          id="sobrenome"
          name="sobrenome"
          type="text"
          required
          value={form.sobrenome}
          onChange={(e) => updateField("sobrenome", e.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-ink">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="numeroOnibus" className="text-sm font-semibold text-ink">
          Número do ônibus
        </label>
        <input
          id="numeroOnibus"
          name="numeroOnibus"
          type="text"
          required
          value={form.numeroOnibus}
          onChange={(e) => updateField("numeroOnibus", e.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="linha" className="text-sm font-semibold text-ink">
          Selecione a linha
        </label>
        <select
          id="linha"
          name="linha"
          required
          value={form.linha}
          onChange={(e) => updateField("linha", e.target.value)}
          className={fieldClass}
        >
          <option value="" disabled>
            Escolha uma linha
          </option>
          {lines.map((line) => (
            <option key={line} value={line}>
              {line}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          Informe o ocorrido
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={8}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Enviar reclamação
      </Button>
    </form>
  );
}
