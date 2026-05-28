import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  loanType?: string;
  bank?: string;
  amount?: string;
  emiStatus?: string;
  contactTime?: string;
  source?: string;
  message?: string;
  consent?: string;
  website?: string; // honeypot
};

function isValid(p: LeadPayload) {
  if (!p.name || p.name.length < 2) return false;
  if (!p.phone || !/^\+?\d[\d\s-]{8,14}$/.test(p.phone)) return false;
  if (p.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) return false;
  if (p.website) return false; // honeypot tripped
  return true;
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as LeadPayload;
    if (!isValid(payload)) {
      return NextResponse.json({ ok: false, error: 'Invalid input' }, { status: 400 });
    }

    // TODO: integrate with backend / CRM / email service.
    // For now we log the payload server-side. Replace this block with a real
    // integration (e.g. fetch to a webhook, send via Resend, write to a DB).
    // Example shape ready for downstream systems:
    const lead = {
      receivedAt: new Date().toISOString(),
      ...payload,
    };
    // eslint-disable-next-line no-console
    console.log('[lead]', lead);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 });
  }
}
