import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import LeadForm from '@/components/LeadForm';
import SectionHeader from '@/components/SectionHeader';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from '@/components/Icons';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us — Book a Legal Consultation in Delhi',
  description:
    'Reach Athena Legal Solution LLP for confidential legal consultation across civil, criminal, family, property, corporate, loan settlement, recovery harassment, and other legal matters.',
  path: '/contact-us',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a Legal Consultation"
        subtitle="Share a few details and our team will reach out for a structured first conversation. Confidential, no-obligation, and grounded in documentation."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-container gap-10 px-4 md:grid-cols-12 md:px-6">
          <div className="md:col-span-5">
            <SectionHeader align="left" eyebrow="Direct channels" title="Talk to Us" />
            <p className="mt-4 text-sm text-navy/75">
              We prefer documented engagement — start a WhatsApp thread or send an email,
              and we will take it from there.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-navy/55">Phone</p>
                  <a href={siteConfig.phoneHref} className="font-heading text-lg text-navy hover:text-gold-dark">
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-accent text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-navy/55">WhatsApp</p>
                  <a
                    href={siteConfig.whatsappPrefilled('General Legal Matter')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-lg text-navy hover:text-emerald-accent"
                  >
                    {siteConfig.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <MailIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-navy/55">Email</p>
                  <a href={siteConfig.emailHref} className="break-all font-heading text-base text-navy hover:text-gold-dark">
                    {siteConfig.email}
                  </a>
                  <a href={siteConfig.altEmailHref} className="mt-1 block break-all text-sm text-navy/70 hover:text-gold-dark">
                    {siteConfig.altEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-navy/55">Office</p>
                  <p className="font-heading text-base text-navy">
                    {siteConfig.address.locality}, {siteConfig.address.sub}<br />
                    {siteConfig.address.region} {siteConfig.address.postalCode}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <ClockIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-navy/55">Hours</p>
                  <p className="font-heading text-base text-navy">{siteConfig.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-3xl border border-slate-soft bg-white p-6 shadow-premium md:p-8">
              <h2 className="font-heading text-2xl text-navy">Send a confidential request</h2>
              <p className="mt-2 text-sm text-navy/70">
                We reply during working hours ({siteConfig.hours}). For urgent matters,
                WhatsApp is fastest.
              </p>
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
