'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { caseTypeOptions } from '@/lib/practiceAreas';

type FieldErrors = Partial<Record<string, string>>;

export default function LeadForm({
  compact = false,
  defaultCaseType,
}: {
  compact?: boolean;
  defaultCaseType?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const router = useRouter();

  function validate(data: FormData): FieldErrors {
    const e: FieldErrors = {};
    const name = (data.get('name') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const consent = data.get('consent');
    const honey = (data.get('website') as string) || '';

    if (!name || name.length < 2) e.name = 'Please enter your full name.';
    if (!/^\+?\d[\d\s-]{8,14}$/.test(phone || '')) e.phone = 'Enter a valid mobile number.';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = 'Enter a valid email address.';
    if (!consent) e.consent = 'Please acknowledge the consent box.';
    if (honey) e.honey = 'Spam detected';
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setServerError(null);
    const form = ev.currentTarget;
    const data = new FormData(form);
    const fieldErrors = validate(data);
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const payload: Record<string, string> = {};
      data.forEach((v, k) => {
        if (typeof v === 'string') payload[k] = v;
      });
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      router.push('/thank-you');
    } catch {
      setServerError(
        'We could not submit the form right now. Please try again or reach us on WhatsApp.'
      );
      setSubmitting(false);
    }
  }

  const labelCls = 'mb-1.5 block text-sm font-medium text-navy';
  const inputCls =
    'w-full rounded-lg border border-slate-soft bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30';
  const errCls = 'mt-1 text-xs text-red-600';

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label="Legal consultation request form">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] top-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-name" className={labelCls}>Full Name *</label>
          <input id="lf-name" name="name" type="text" required autoComplete="name" className={inputCls} placeholder="As per ID" />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="lf-phone" className={labelCls}>Mobile Number *</label>
          <input id="lf-phone" name="phone" type="tel" required autoComplete="tel" className={inputCls} placeholder="+91 9XXXXXXXXX" />
          {errors.phone && <p className={errCls}>{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-email" className={labelCls}>Email</label>
          <input id="lf-email" name="email" type="email" autoComplete="email" className={inputCls} placeholder="you@example.com" />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="lf-city" className={labelCls}>City</label>
          <input id="lf-city" name="city" type="text" autoComplete="address-level2" className={inputCls} placeholder="Delhi" />
        </div>
      </div>

      <div>
        <label htmlFor="lf-case" className={labelCls}>Case Type *</label>
        <select
          id="lf-case"
          name="caseType"
          required
          className={inputCls}
          defaultValue={defaultCaseType ?? ''}
        >
          <option value="" disabled>Select case type</option>
          {caseTypeOptions.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-notice" className={labelCls}>Notice Received?</label>
          <select id="lf-notice" name="noticeReceived" className={inputCls} defaultValue="">
            <option value="">Select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="Not sure">Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="lf-time" className={labelCls}>Preferred Contact Time</label>
          <select id="lf-time" name="contactTime" className={inputCls} defaultValue="">
            <option value="">Any time</option>
            <option>Morning (9 AM – 12 PM)</option>
            <option>Afternoon (12 PM – 3 PM)</option>
            <option>Evening (3 PM – 5 PM)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="lf-message" className={labelCls}>Brief Case Details</label>
        <textarea
          id="lf-message"
          name="message"
          rows={compact ? 3 : 4}
          className={inputCls}
          placeholder="A short description of your situation — facts, dates, lender/party names, etc."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-navy/80">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-slate-soft text-gold focus:ring-gold" />
        <span>
          I agree to be contacted by Athena Legal Solution LLP regarding my inquiry. I
          understand outcomes depend on facts, documents, applicable law, and the
          discretion of the competent court / authority / lender.
        </span>
      </label>
      {errors.consent && <p className={errCls}>{errors.consent}</p>}

      {serverError && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        data-cta="lead-form-submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-navy-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:opacity-95 disabled:opacity-60 sm:w-auto"
      >
        {submitting ? 'Submitting…' : 'Book Legal Consultation'}
      </button>
    </form>
  );
}
