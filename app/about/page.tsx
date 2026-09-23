import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, Heart, Users, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { doctor, credentials } from "@/lib/site"

export const metadata: Metadata = {
  title: "About | Dr. Daniel Hart, Consultant Cardiologist",
  description:
    "Learn about Dr. Daniel Hart's decade of experience, training, and patient-first philosophy in cardiovascular medicine.",
}

const philosophy = [
  {
    icon: Heart,
    title: "Patient-first care",
    text: "Every treatment plan starts with your goals, your concerns, and your life — not a one-size-fits-all protocol.",
  },
  {
    icon: BookOpen,
    title: "Evidence-based medicine",
    text: "Care rooted in the latest cardiology research, continually updated as science advances.",
  },
  {
    icon: Users,
    title: "Collaborative approach",
    text: "Working alongside your primary care team and family to support your long-term heart health.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the doctor"
        title="Meet Dr. Daniel Hart"
        description="A decade of experience in cardiovascular medicine, driven by a simple belief: exceptional care begins with genuinely listening to every patient."
      />

      {/* Bio */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl border border-border/60 shadow-lg lg:sticky lg:top-24">
              <Image
                src="/doctor-portrait.png"
                alt={`Portrait of ${doctor.name}`}
                width={640}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-3">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              A career devoted to the heart
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {doctor.name}, {doctor.credentials}, is a board-certified consultant cardiologist with
              more than ten years of dedicated clinical experience. He has cared for over 6,500
              patients and performed more than 1,800 procedures, earning a reputation for both
              technical excellence and genuine compassion.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              After completing his medical degree at the University of California, San Francisco, Dr.
              Hart trained in internal medicine at Johns Hopkins Hospital before pursuing a
              fellowship in interventional cardiology at Stanford University Medical Center. This
              rigorous training shaped his meticulous, patient-centered approach to heart care.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Today, his practice spans preventive cardiology, heart failure management,
              interventional procedures, and advanced cardiac imaging. Dr. Hart is known for taking
              the time to explain complex conditions in plain language, so every patient feels
              informed, empowered, and at ease.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Outside the clinic, he is an active contributor to cardiology research and a mentor to
              the next generation of physicians, regularly publishing on preventive strategies that
              help patients avoid heart disease before it begins.
            </p>

            <div className="mt-4 rounded-2xl border border-border/60 bg-secondary/40 p-6">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" />
                <h3 className="font-semibold text-foreground">Education & Training</h3>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {credentials.map((c) => (
                  <li key={c.label}>
                    <p className="text-sm font-semibold text-foreground">{c.label}</p>
                    <p className="text-sm text-muted-foreground">{c.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="My philosophy"
            title="How I care for every patient"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {philosophy.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-card p-10 text-center shadow-sm sm:p-14">
          <h2 className="max-w-2xl font-serif text-3xl font-semibold text-foreground text-balance">
            Have a question about your heart health?
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Dr. Hart welcomes new patients and second opinions. Reach out to schedule a consultation.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
