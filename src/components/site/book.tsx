"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import { Check, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EVENT_TYPES, SITE, whatsappUrl } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  eventType: string;
  date: string;
  city: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  eventType: EVENT_TYPES[0],
  date: "",
  city: "",
  message: "",
};

export function Book() {
  const [fields, setFields] = useState<Fields>(empty);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (fields.name.trim().length < 2) {
      setError("A name helps the booking land.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      setError("Use a real email so the date can be confirmed.");
      return;
    }
    if (!fields.date) {
      setError("Pick a date, even if it is a hold.");
      return;
    }
    if (fields.city.trim().length < 2) {
      setError("Where is the room?");
      return;
    }
    if (fields.message.trim().length < 8) {
      setError("A few lines on the night go a long way.");
      return;
    }
    setError(null);

    const text = [
      `Booking request for ${SITE.name}`,
      "",
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      `Event: ${fields.eventType}`,
      `Date: ${fields.date}`,
      `City: ${fields.city.trim()}`,
      "",
      fields.message.trim(),
    ].join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    try {
      localStorage.setItem(
        "amir-booking",
        JSON.stringify({ ...fields, at: Date.now() }),
      );
    } catch {
      /* ignore quota */
    }
    setSent(true);
  }

  return (
    <section id="book" className="scroll-mt-16 border-t border-border pt-20 pb-40 sm:pt-28 sm:pb-48">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
            Bookings
          </p>
          <h2 className="mt-3 font-display text-title text-fg">Hold the night.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Clubs, weddings, beach rooms, private houses, brand work. Send the
            brief — WhatsApp is the fastest line to the booth.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={whatsappUrl("Hi Amir — I'd like to book a date.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover"
            >
              <MessageCircle className="size-4 text-accent" />
              <span>
                <span className="block text-sm font-medium">WhatsApp</span>
                <span className="block text-xs text-muted">{SITE.whatsappDisplay}</span>
              </span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover"
            >
              <Mail className="size-4 text-accent" />
              <span>
                <span className="block text-sm font-medium">Email</span>
                <span className="block text-xs text-muted">{SITE.email}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div className="flex min-h-80 flex-col justify-center rounded-2xl bg-surface p-8 shadow-border">
              <span className="grid size-10 place-items-center rounded-full bg-accent text-bg">
                <Check className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">Request opened</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                WhatsApp should now hold a drafted message with your details. If
                it did not open, write directly on {SITE.whatsappDisplay}.
              </p>
              <Button
                className="mt-6 w-fit"
                variant="outline"
                onClick={() => {
                  setSent(false);
                  setFields(empty);
                }}
              >
                Send another
              </Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-surface p-5 shadow-border sm:p-7"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <Input
                    id="name"
                    autoComplete="name"
                    value={fields.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={fields.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@studio.com"
                  />
                </Field>
                <Field label="Event type" htmlFor="eventType">
                  <select
                    id="eventType"
                    value={fields.eventType}
                    onChange={(e) => update("eventType", e.target.value)}
                    className="flex h-11 w-full rounded-md bg-elevated px-3.5 text-sm text-fg shadow-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Date" htmlFor="date">
                  <Input
                    id="date"
                    type="date"
                    value={fields.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </Field>
                <Field label="City / venue" htmlFor="city" className="sm:col-span-2">
                  <Input
                    id="city"
                    value={fields.city}
                    onChange={(e) => update("city", e.target.value)}
                    placeholder="Dubai, Doha, Cairo..."
                  />
                </Field>
                <Field label="The night" htmlFor="message" className="sm:col-span-2">
                  <Textarea
                    id="message"
                    value={fields.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Guest count, room, energy you want, start time."
                  />
                </Field>
              </div>
              {error ? (
                <p className="mt-3 text-sm text-accent" role="alert">
                  {error}
                </p>
              ) : null}
              <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                Send via WhatsApp
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className ? `flex flex-col gap-1.5 ${className}` : "flex flex-col gap-1.5"}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
