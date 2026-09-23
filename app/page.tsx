import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  Activity,
  ShieldCheck,
  Stethoscope,
  ScanHeart,
  Waves,
  Gauge,
  ArrowRight,
  Star,
  Quote,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { doctor, stats, services, testimonials } from "@/lib/site"

const serviceIcons = [Heart, Activity, Stethoscope, ScanHeart, Waves, Gauge]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              Board-Certified Cardiologist · 10+ Years
            </span>
            <h1 className="font-serif text-4xl font-semibold leading-[1.1] text-foreground text-balance sm:text-5xl lg:text-6xl">
              Expert heart care with a human touch
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {doctor.name}, {doctor.credentials}, provides trusted, evidence-based cardiology care —
              from prevention to advanced interventional treatment — helping thousands of patients
              live longer, healthier lives.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book an Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Meet Dr. Hart</Link>
              </Button>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span>Rated 4.9/5 by 500+ patients</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-xl shadow-primary/5">
              <Image
                src="/doctor-portrait.png"
                alt={`Portrait of ${doctor.name}, consultant cardiologist`}
                width={720}
                height={840}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border/60 bg-card p-4 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-5 w-5" fill="currentColor" />
                </span>
                <div>
                  <p className="text-2xl font-semibold leading-none text-foreground">6,500+</p>
                  <p className="mt-1 text-xs text-muted-foreground">Patients cared for</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-semibold sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="What I treat"
          title="Comprehensive cardiovascular care"
          description="A full spectrum of heart services, delivered with precision, warmth, and the latest medical evidence."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i % serviceIcons.length]
            return (
              <Card key={service.title} className="border-border/60 transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col gap-4 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* About preview */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-lg">
            <Image
              src="/clinic-interior.png"
              alt="Interior of Dr. Hart's modern cardiology clinic"
              width={720}
              height={540}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="A decade of dedication"
              title="Care that treats the person, not just the heart"
            />
            <p className="text-base leading-relaxed text-muted-foreground">
              Over the past ten years, {doctor.name} has built a practice grounded in listening,
              clarity, and clinical excellence. Every patient receives a personalized plan and the
              time they deserve.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Fellowship-trained in interventional cardiology",
                "Nationally recognized for patient outcomes",
                "Same-week appointments for urgent concerns",
                "Clear explanations, no medical jargon",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="w-fit">
              <Link href="/about">
                Read full biography
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Patient voices"
          title="Trusted by thousands of hearts"
          description="Real stories from patients who have experienced compassionate, life-changing care."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <Card key={t.name} className="border-border/60">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="flex-1 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
                <div className="border-t border-border/60 pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/testimonials">
              Read more testimonials
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="max-w-2xl font-serif text-3xl font-semibold text-balance sm:text-4xl">
            Take the first step toward a healthier heart
          </h2>
          <p className="max-w-xl text-primary-foreground/85">
            Schedule a consultation with {doctor.name} today. Your heart deserves expert,
            compassionate attention.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Book Your Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
