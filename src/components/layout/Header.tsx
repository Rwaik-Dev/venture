import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import marcaBranco from "@/assets/Marca-branco.png";
import { IconClose, IconMenu } from "@/components/ui/Icons";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/sobre-nos", label: "Sobre nós" },
  { to: "/noticias", label: "Notícias" },
  { to: "/reclamacoes", label: "Reclamações" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200",
    isActive ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/15 hover:text-white",
  ].join(" ");

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img
            src={marcaBranco}
            alt="Venture Transporte"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          className="animate-fade-in border-t border-white/20 px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
