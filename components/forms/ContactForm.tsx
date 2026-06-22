"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-lg border border-slate-100 bg-white p-6 shadow-soft">
      {sent ? <p className="rounded-md bg-blue-50 px-4 py-3 font-semibold text-primary">Message received. Our team will get back to you.</p> : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="contact-name" name="name" label="Name" />
        <Input id="contact-email" name="email" label="Email" type="email" />
      </div>
      <Input id="contact-subject" name="subject" label="Subject" />
      <div>
        <label htmlFor="contact-message" className="text-sm font-bold text-ink">Message</label>
        <textarea id="contact-message" name="message" required rows={6} className="focus-ring mt-2 w-full rounded-md border border-slate-200 px-4 py-3" />
      </div>
      <button type="submit" className="focus-ring min-h-12 rounded-md bg-primary px-5 font-bold text-white transition hover:bg-blue-700">
        Send Message
      </button>
    </form>
  );
}

function Input({ id, name, label, type = "text" }: { id: string; name: string; label: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-ink">{label}</label>
      <input id={id} name={name} type={type} required className="focus-ring mt-2 min-h-12 w-full rounded-md border border-slate-200 px-4" />
    </div>
  );
}
