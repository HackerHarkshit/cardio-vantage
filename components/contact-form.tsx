"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-secondary/40 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-serif text-2xl font-semibold text-foreground">Thank you!</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Your request has been received. A member of our care team will reach out within one
          business day to confirm your appointment.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" name="firstName" placeholder="Jane" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" name="lastName" placeholder="Doe" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="reason">Reason for visit</Label>
        <Input id="reason" name="reason" placeholder="e.g. Consultation, follow-up, second opinion" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us a little about your concern or preferred appointment times."
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-fit">
        <Send className="h-4 w-4" />
        Request Appointment
      </Button>
      <p className="text-xs text-muted-foreground">
        For medical emergencies, call 911. This form is not monitored 24/7.
      </p>
    </form>
  )
}
