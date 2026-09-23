import type { Metadata } from "next"
import Link from "next/link"
import { Award, Medal, Trophy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { honors } from "@/lib/site"

export const metadata: Metadata = {
  title: "Honors & Awards | Dr. Daniel Hart",
  description:
    "Awards, recognitions, and professional achievements earned by Dr. Daniel Hart throughout his cardiology career.",
}

const summary = [
  { icon: Trophy, value: "12+", label: "Awards & recognitions" },
  { icon: Medal, value: "8", label: "Published studies" },
  { icon: Award, value: "5", label: "Fellowships & certifications" },
]

export default function HonorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recognition"
        title="Honors & Awards"
        description="A decade of clinical excellence, research contributions, and patient-centered care — recognized by peers and institutions across the field of cardiology."
      />

      {/* Summary */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {summary.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-serif text-2xl font-semibold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <ol className="relative border-l border-border pl-8">
          {honors.map((honor) => (
            <li key={honor.title} className="mb-10 last:mb-0">
              <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background" />
              <div className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {honor.year}
                  </span>
                  <span className="text-sm font-medium text-accent-foreground">{honor.org}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{honor.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{honor.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="max-w-2xl font-serif text-3xl font-semibold text-balance sm:text-4xl">
            Experience award-winning cardiac care
          </h2>
          <p className="max-w-xl text-primary-foreground/85">
            Put a decade of recognized expertise to work for your heart health.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
