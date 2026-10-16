import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Venture app", () => {
  it("renders the Home hero brand", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /mobilidade que conecta o brasil/i,
      }),
    ).toBeInTheDocument();
  });

  it("navigates to Sobre nós", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("link", { name: /^sobre nós$/i }));

    expect(
      screen.getByRole("heading", { name: /^sobre nós$/i }),
    ).toBeInTheDocument();
  });

  it("submits the complaint form and shows success", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("link", { name: /^reclamações$/i }));

    await user.type(screen.getByLabelText(/^nome$/i), "Maria");
    await user.type(screen.getByLabelText(/^sobrenome$/i), "Silva");
    await user.type(screen.getByLabelText(/^e-mail$/i), "maria@email.com");
    await user.type(screen.getByLabelText(/número do ônibus/i), "42");
    await user.selectOptions(screen.getByLabelText(/selecione a linha/i), "Linha 1");
    await user.type(
      screen.getByLabelText(/informe o ocorrido/i),
      "Atraso na linha neste período da manhã.",
    );

    await user.click(
      screen.getByRole("button", { name: /enviar reclamação/i }),
    );

    expect(screen.getByTestId("complaint-success")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /reclamação enviada com sucesso/i }),
    ).toBeInTheDocument();
  });
});
