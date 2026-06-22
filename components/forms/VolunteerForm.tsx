"use client";

import { FormEvent, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "phone" | "city" | "skills" | "reason", string>>;

export function VolunteerForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");

    ["name", "city", "skills", "reason"].forEach((key) => {
      if (!String(form.get(key)).trim()) {
        nextErrors[key as keyof Errors] = "This field is required.";
      }
    });
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!/^[0-9+\-\s]{8,15}$/.test(phone)) nextErrors.phone = "Enter a valid phone number.";

    setErrors(nextErrors);
    setSuccess(Object.keys(nextErrors).length === 0);
    if (Object.keys(nextErrors).length === 0) {
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-lg border border-slate-100 bg-white p-6 shadow-soft">
      {success ? <div className="rounded-md bg-emerald-50 px-4 py-3 font-semibold text-secondary">Thank you for registering. We will reach out soon.</div> : null}
      <Field id="name" label="Full Name" error={errors.name} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" type="email" error={errors.email} />
        <Field id="phone" label="Phone" type="tel" error={errors.phone} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="city" label="City" error={errors.city} />
        <Field id="skills" label="Skills" error={errors.skills} />
      </div>
      <div>
        <label htmlFor="reason" className="text-sm font-bold text-ink">Why do you want to volunteer?</label>
        <textarea id="reason" name="reason" rows={5} className="focus-ring mt-2 w-full rounded-md border border-slate-200 px-4 py-3" />
        {errors.reason ? <p className="mt-1 text-sm text-red-600">{errors.reason}</p> : null}
      </div>
      <button type="submit" className="focus-ring min-h-12 rounded-md bg-primary px-5 font-bold text-white transition hover:bg-blue-700">
        Submit Registration
      </button>
    </form>
  );
}

function Field({ id, label, type = "text", error }: { id: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-ink">{label}</label>
      <input id={id} name={id} type={type} className="focus-ring mt-2 min-h-12 w-full rounded-md border border-slate-200 px-4" />
      {error ? <p className="mt-1 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
