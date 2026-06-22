type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, text, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-normal text-ink sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p> : null}
    </div>
  );
}
