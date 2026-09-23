interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-20">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          <span className="h-px w-6 bg-primary" />
          {eyebrow}
          <span className="h-px w-6 bg-primary" />
        </span>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-foreground text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      </div>
    </section>
  )
}
