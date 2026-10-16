interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-white" : "text-ink";
  const subColor = light ? "text-white/85" : "text-ink-muted";

  return (
    <div className={`mb-10 max-w-2xl ${alignClass}`}>
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-3 text-base leading-relaxed sm:text-lg ${subColor}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
