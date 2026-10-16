import { IconGithub, IconInstagram, IconLinkedIn } from "@/components/ui/Icons";

const social = [
  {
    href: "https://github.com/Rwaik-Dev",
    label: "GitHub",
    icon: IconGithub,
  },
  {
    href: "https://www.linkedin.com/in/rwaik/",
    label: "LinkedIn",
    icon: IconLinkedIn,
  },
  {
    href: "https://www.instagram.com/wilkerr/",
    label: "Instagram",
    icon: IconInstagram,
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-brand text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold">Venture Transporte</p>
          <p className="mt-1 text-sm text-white/85">
            Desenvolvido por Wilker Rwaik Eloi
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {social.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/15"
              >
                <Icon />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
