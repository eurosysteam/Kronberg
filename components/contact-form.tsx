"use client";

import { useState, type FormEvent } from "react";

type ContactFormLabels = {
  fields: {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    subject: string;
    message: string;
    privacy: string;
  };
  errors: Record<string, string>;
  submit: string;
  sending: string;
  success: string;
};

type FormValues = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
};

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  subject: "",
  message: "",
  privacy: false,
};

function validate(values: FormValues, labels: ContactFormLabels) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.firstName.trim()) errors.firstName = labels.errors.firstName;
  if (!values.lastName.trim()) errors.lastName = labels.errors.lastName;
  if (!values.company.trim()) errors.company = labels.errors.company;
  if (!emailPattern.test(values.email.trim())) errors.email = labels.errors.email;
  if (!values.subject.trim()) errors.subject = labels.errors.subject;
  if (values.message.trim().length < 10) errors.message = labels.errors.message;
  if (!values.privacy) errors.privacy = labels.errors.privacy;

  return errors;
}

export function ContactForm({ labels }: { labels: ContactFormLabels }) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const fieldClass =
    "mt-2 w-full rounded border border-[var(--color-line)] bg-white px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-cyan)] focus:ring-2 focus:ring-[var(--color-cyan)]/25";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, labels);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setValues(initialValues);
    setErrors({});
    setStatus("success");
  }

  return (
    <form className="rounded-lg border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8" noValidate onSubmit={onSubmit}>
      {status === "success" ? (
        <div className="mb-6 rounded border border-[var(--color-cyan)] bg-[var(--color-light)] px-4 py-3 text-sm font-semibold text-[var(--color-navy)]" role="status">
          {labels.success}
        </div>
      ) : null}
      {status === "error" && Object.keys(errors).length > 0 ? (
        <div className="mb-6 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800" role="alert">
          {labels.errors.generic}
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <Field
          className={fieldClass}
          error={errors.firstName}
          label={labels.fields.firstName}
          name="firstName"
          onChange={(value) => setValues((current) => ({ ...current, firstName: value }))}
          value={values.firstName}
        />
        <Field
          className={fieldClass}
          error={errors.lastName}
          label={labels.fields.lastName}
          name="lastName"
          onChange={(value) => setValues((current) => ({ ...current, lastName: value }))}
          value={values.lastName}
        />
        <Field
          className={fieldClass}
          error={errors.company}
          label={labels.fields.company}
          name="company"
          onChange={(value) => setValues((current) => ({ ...current, company: value }))}
          value={values.company}
        />
        <Field
          className={fieldClass}
          error={errors.email}
          label={labels.fields.email}
          name="email"
          onChange={(value) => setValues((current) => ({ ...current, email: value }))}
          type="email"
          value={values.email}
        />
      </div>

      <div className="mt-6">
        <Field
          className={fieldClass}
          error={errors.subject}
          label={labels.fields.subject}
          name="subject"
          onChange={(value) => setValues((current) => ({ ...current, subject: value }))}
          value={values.subject}
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-bold text-[var(--color-navy)]" htmlFor="message">
          {labels.fields.message}
        </label>
        <textarea
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          className={`${fieldClass} min-h-44 resize-y`}
          id="message"
          name="message"
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          value={values.message}
        />
        {errors.message ? (
          <p className="mt-2 text-sm font-semibold text-red-700" id="message-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6">
        <label className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]">
          <input
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
            aria-invalid={Boolean(errors.privacy)}
            checked={values.privacy}
            className="mt-1 h-5 w-5 rounded border-[var(--color-line)] accent-[var(--color-cyan)]"
            onChange={(event) => setValues((current) => ({ ...current, privacy: event.target.checked }))}
            type="checkbox"
          />
          <span>{labels.fields.privacy}</span>
        </label>
        {errors.privacy ? (
          <p className="mt-2 text-sm font-semibold text-red-700" id="privacy-error">
            {errors.privacy}
          </p>
        ) : null}
      </div>

      <button
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded bg-[var(--color-cyan)] px-6 text-sm font-bold uppercase tracking-normal text-white transition hover:bg-[#008f99] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? labels.sending : labels.submit}
      </button>
    </form>
  );
}

type FieldProps = {
  className: string;
  error?: string;
  label: string;
  name: keyof Omit<FormValues, "privacy">;
  onChange: (value: string) => void;
  type?: string;
  value: string;
};

function Field({ className, error, label, name, onChange, type = "text", value }: FieldProps) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label className="block text-sm font-bold text-[var(--color-navy)]" htmlFor={name}>
        {label}
      </label>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className={className}
        id={name}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        value={value}
      />
      {error ? (
        <p className="mt-2 text-sm font-semibold text-red-700" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
