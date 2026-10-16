import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { carouselImages } from "@/data/carousel";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % carouselImages.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  function goTo(next: number) {
    const len = carouselImages.length;
    setIndex(((next % len) + len) % len);
  }

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden sm:min-h-[78vh]">
      {carouselImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden={i !== index}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/45 to-transparent" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:min-h-[78vh] sm:px-6 sm:pb-20 lg:px-8">
        <p className="animate-fade-up font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Venture Transporte
        </p>
        <h1 className="animate-fade-up mt-3 max-w-xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Mobilidade que conecta o Brasil
        </h1>
        <p className="animate-fade-up mt-4 max-w-lg text-base text-white/90 sm:text-lg">
          Transporte público seguro, pontual e acessível — do bairro ao país.
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap gap-3">
          <Link to="/sobre-nos">
            <Button variant="primary">Conheça a Venture</Button>
          </Link>
          <Link to="/noticias">
            <Button variant="ghost" className="border border-white/40">
              Ver notícias
            </Button>
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            aria-label="Imagem anterior"
            className="rounded-full bg-white/15 px-3 py-2 text-white backdrop-blur transition hover:bg-white/25"
            onClick={() => goTo(index - 1)}
          >
            ‹
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Slides do hero">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-brand scale-110" : "bg-white/50 hover:bg-white/80"
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Próxima imagem"
            className="rounded-full bg-white/15 px-3 py-2 text-white backdrop-blur transition hover:bg-white/25"
            onClick={() => goTo(index + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
