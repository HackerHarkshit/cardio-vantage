import type { Metadata } from "next"
import Link from "next/link"
import { Star, Quote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHero } from "@/components/page-hero"
import { testimonials, doctor } from "@/lib/site"

export const metadata: Metadata = {
  title: "Testimonials | Dr. Daniel Hart",
  description:
    "Read what patients say about Dr. Daniel Hart's compassionate, expert cardiology care.",
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient stories"
        title="What patients say"
        description="Nothing means more than the trust of the people we care for. Here are some of their words."
      />

      {/* Rating banner */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="flex flex-col items-center gap-3 rounded-3xl border border-border/60 bg-secondary/40 p-8 text-center sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-4xl font-semibold text-foreground">4.9</span>
            <div className="flex flex-col items-start">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">out of 5</span>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-border sm:block" />
          <p className="text-sm text-muted-foreground">
            Based on 500+ verified patient reviews across leading healthcare platforms
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/60">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="flex-1 leading-relaxed text-foreground">"{t.quote}"</p>
                <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-serif text-sm font-semibold text-primary">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.detail}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-card p-10 text-center shadow-sm sm:p-14">
          <h2 className="max-w-2xl font-serif text-3xl font-semibold text-foreground text-balance">
            Become our next success story
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Join thousands of patients who trust {doctor.name} with their heart health.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Schedule a visit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
