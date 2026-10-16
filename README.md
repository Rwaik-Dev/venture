# Venture Transporte — v2

Site institucional fictício de uma empresa de transporte público, criado como portfólio front-end. Inspirado em empresas reais do setor (Rodap, Setra).

**Versão atual:** 2.0 — reformulação completa de UI, tooling e qualidade de código.



## O que mudou na v2

| Área | v1 (CRA) | v2 (atual) |
|------|----------|------------|
| Build | Create React App (`react-scripts`) | **Vite 6** |
| Estilo | styled-components (CSS espalhado) | **Tailwind CSS 4** + tokens de marca |
| Tipagem | TS 4.9 + dados em `.js` | **TypeScript 5** + dados tipados |
| Rotas | Router em `index.tsx`, layout duplicado | **Layout único** (`MainLayout` + `Outlet`) |
| Responsividade | Sem media queries | **Mobile-first** (menu hamburger, grids) |
| Acessibilidade | Links com `<button>`, form sem labels | Nav semântica, `htmlFor`, hero com ARIA |
| Formulário | Sem `preventDefault`, `console.log` | Validação, feedback de sucesso tipado |
| Testes | Nenhum | **Vitest** + Testing Library (smoke) |
| Estrutura | Pastas com acento / typo `Midea` | Pastas limpas (`assets`, `pages`, `data`) |
| Visual | Sombras Material repetidas, aspect “2018” | Hero full-bleed, tipografia Outfit + DM Sans |

A **identidade de cores** foi preservada:

| Token | Hex | Uso |
|-------|-----|-----|
| Brand (primária) | `#0ec19b` | Header, footer, CTAs |
| Brand accent | `#1449b4` | Hover / links de destaque |
| Surface | `#ececec` | Fundos de seção |
| Canvas | `#f7faf9` | Fundo da página |
| Ink | `#1a2332` | Texto principal |



## Por que essas tecnologias

### Vite (em vez de CRA ou Next.js)
- **CRA** está em manutenção, com tooling lento e pouca evolução.
- **Vite** oferece HMR rápido, config mínima, bundling moderno (ESBuild/Rollup) e alinhamento com Node atual — ideal para um portfólio SPA.
- **Next.js** foi descartado de propósito: o projeto não precisa de SSR/SSG/API routes. Vite é o caminho mais leve.

### Tailwind CSS (em vez de styled-components)
- Tokens de cor (`brand`, `brand-accent`) ficam **centralizados** — acabou o copy-paste de hex e box-shadows.
- Responsividade via utilitários (`sm:`, `md:`, `lg:`) torna o layout mobile previsível.
- Redesign visual pesado fica mais rápido e consistente do que reescrever dezenas de arquivos `styles.tsx`.

### TypeScript 5 + dados tipados
- Contratos explícitos (`NewsItem`, `Testimonial`, `ComplaintFormData`) evitam bugs como `useState([])` usado como objeto.
- Melhor autocomplete e refatoração segura.

### React Router com layout routes
- Header e Footer em um único lugar (`MainLayout`).
- Página **404** real (antes o `*` caía na Home).
- Rotas claras: `/`, `/sobre-nos`, `/noticias`, `/reclamacoes`.

### Vitest
- Mesmo ecossistema do Vite; smoke tests garantem Home, navegação e submit do formulário sem regressão óbvia.



## Stack

- **React 18** + **TypeScript 5**
- **Vite 6** + **@vitejs/plugin-react**
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **React Router DOM 6**
- **Vitest** + **Testing Library**
- **ESLint 9** (flat config)



## Rodando localmente

```bash
git clone https://github.com/Rwaik-Dev/venture
cd venture
npm install
npm run dev
```

Outros scripts:

```bash
npm run build    # typecheck + build de produção
npm run preview  # preview do build
npm test         # testes Vitest
npm run lint     # ESLint
```

Abra o endereço indicado no terminal (geralmente `http://localhost:5173`).



## Estrutura do projeto

```
src/
  assets/              # logos da marca
  components/
    layout/            # Header, Footer
    home/              # Hero, Values, Stats, NewsTeasers
    about/             # Testimonials
    news/              # NewsCard
    complaints/        # ComplaintForm
    ui/                # Button, Container, SectionHeading, Icons
  data/                # conteúdo tipado (news, company, etc.)
  layouts/             # MainLayout
  pages/               # Home, SobreNos, Noticias, Reclamacoes, NotFound
  types/               # interfaces compartilhadas
  App.tsx              # rotas
  main.tsx             # entry
  index.css            # Tailwind + tokens + animações
```



## Páginas

1. **Home** — hero com carrossel, missão/visão/valores, stats da empresa, teasers de notícias  
2. **Sobre nós** — trajetória, valores e depoimentos  
3. **Notícias** — lista expansível de matérias  
4. **Reclamações** — formulário acessível com estado de sucesso (sem backend)  
5. **404** — rota inexistente  



## Referências de design (inspiração)

- [Rodap](http://www.rodap.com.br)
- [Setra](https://setrabh.org.br)



## Changelog resumido

### v2.0.0
- Migração CRA → Vite + Tailwind
- Redesign visual completo (mantendo `#0ec19b` / `#1449b4`)
- Layout único, tipagem, a11y, responsividade, testes e README atualizado

### v1.0.0
- SPA CRA com styled-components e quatro páginas institucionais



## Autor

- [Wilker Rwaik Eloi](https://github.com/Rwaik-Dev)
