import { useState } from "react";
import type { NewsItem } from "@/types";
import { Button } from "@/components/ui/Button";

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-surface">
      <div className="grid md:grid-cols-[minmax(0,280px)_1fr]">
        <img
          src={item.img}
          alt={`Ilustração: ${item.title}`}
          className="h-48 w-full bg-surface object-cover md:min-h-full md:h-full"
          loading="eager"
        />
        <div className="flex flex-col p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-ink">{item.title}</h2>
          <p className="mt-2 text-ink-muted">{item.summary}</p>
          {expanded ? (
            <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-ink sm:text-base">
              {item.body}
            </p>
          ) : null}
          <div className="mt-6">
            <Button
              variant="outline"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? "Recolher" : "Ler matéria completa"}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
