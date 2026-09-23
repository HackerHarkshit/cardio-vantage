import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { doctor, hours } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact | Dr. Daniel Hart, Consultant Cardiologist",
  description:
    "Book an appointment or get in touch with Dr. Daniel Hart's cardiology practice. Same-week appointments available.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Book an appointment"
        description="Schedule a consultation with Dr. Hart's team. We offer same-week appointments for urgent concerns and welcome new patients."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <div className="flex flex-col gap-6">
              <ContactItem icon={Phone} label="Phone">
                <a href={`tel:${doctor.phone}`} className="transition-colors hover:text-primary">
                  {doctor.phone}
                </a>
              </ContactItem>
              <ContactItem icon={Mail} label="Email">
                <a href={`mailto:${doctor.email}`} className="transition-colors hover:text-primary">
                  {doctor.email}
                </a>
              </ContactItem>
              <ContactItem icon={MapPin} label="Clinic address">
                {doctor.address}
              </ContactItem>
            </div>

            <div className="rounded-2xl border border-border/60 bg-secondary/40 p-6">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                <h3 className="font-semibold text-foreground">Office hours</h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Request an appointment
              </h2>
              <p className="mt-2 mb-6 text-sm text-muted-foreground">
                Fill out the form below and our team will confirm your visit within one business day.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-foreground">{children}</p>
      </div>
    </div>
  )
}
