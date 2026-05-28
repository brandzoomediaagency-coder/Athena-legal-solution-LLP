# Athena Legal Solution LLP — Website

Premium, SEO-first Next.js 14 (App Router) website for Athena Legal Solution LLP — a legal and financial advisory firm covering loan settlement, credit card settlement, debt resolution, recovery harassment support, and legal notice assistance.

> **Tagline:** Guided by Justice, Driven by Results
> **Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables (optional)

```bash
cp .env.local.example .env.local
# fill in GA / Meta Pixel / GSC IDs as needed
```

### 3. Run locally

```bash
npm run dev
# open http://localhost:3000
```

### 4. Production build

```bash
npm run build
npm run start
```

### 5. Lint / typecheck

```bash
npm run lint
npm run typecheck
```

---

## Project Structure

```
src/
  app/
    layout.tsx                    # Root layout, metadata, fonts, analytics
    page.tsx                      # Home
    globals.css                   # Tailwind + design tokens
    sitemap.ts                    # Auto-generated XML sitemap
    robots.ts                     # robots.txt
    not-found.tsx                 # 404
    api/lead/route.ts             # Lead form submission endpoint
    about/page.tsx
    services/page.tsx             # Services index
    services/[slug]/page.tsx      # Dynamic service detail pages
    blog/page.tsx                 # Blog index
    blog/[slug]/page.tsx          # Dynamic blog post pages
    faq/page.tsx
    contact/page.tsx
    thank-you/page.tsx            # Form success
    privacy-policy/page.tsx
    terms-and-conditions/page.tsx
    refund-policy/page.tsx
    disclaimer/page.tsx
  components/                     # Reusable UI components
  lib/
    site.ts                       # Brand + contact config
    services.ts                   # Service catalog (single source of truth)
    blogs.ts                      # Blog post catalog
    seo.ts                        # Metadata helper
public/
  logo.svg / logo.png             # Brand logo
  favicon.svg                     # Favicon
  og-athena-legal.svg             # Open Graph preview image
  site.webmanifest                # PWA manifest
```

---

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, services, process, why-choose, lead form, FAQ |
| `/about` | About the firm, values, contact summary |
| `/services` | All advisory services index |
| `/services/personal-loan-settlement` | Personal Loan Settlement service page |
| `/services/credit-card-settlement` | Credit Card Settlement service page |
| `/services/business-loan-settlement` | Business Loan Settlement service page |
| `/services/recovery-agent-harassment-support` | Recovery harassment advisory |
| `/services/legal-notice-assistance` | Legal notice review and response |
| `/services/debt-resolution-advisory` | Consolidated debt resolution advisory |
| `/blog` | Knowledge Center index |
| `/blog/[slug]` | 8 long-form articles |
| `/faq` | Categorised FAQ |
| `/contact` | Direct channels + lead form |
| `/thank-you` | Post-submit confirmation (noindex) |
| `/privacy-policy` · `/terms-and-conditions` · `/refund-policy` · `/disclaimer` | Legal pages |
| `/sitemap.xml` · `/robots.txt` | Auto-generated SEO infra |

---

## How to update common things

### Brand / contact details
Edit `src/lib/site.ts`:

```ts
phone: '+91-XXXXXXXXXX',
whatsapp: '+91-XXXXXXXXXX',
email: 'contact@athenalegalsolutionllp.in',
address: { … },
```

Phone & WhatsApp `href` variants are also set in the same file — keep them in sync (the `tel:` and `wa.me/` versions use no spaces or dashes).

### Services
Edit `src/lib/services.ts`. The catalog is the single source of truth — service cards, footer links, service pages, sitemap, and JSON-LD all read from it.

### Blog posts
Edit `src/lib/blogs.ts`. Add a new entry to the array and a new article page renders automatically at `/blog/<slug>`.

### Tracking IDs (GA / Meta Pixel / GSC)
Drop them into `.env.local`:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=000000000000000
NEXT_PUBLIC_GSC_VERIFICATION=xxxxxxxxxxxx
```

The scripts in `src/app/layout.tsx` only load when the corresponding ID is present.

### Lead form integration
The `POST /api/lead` route in `src/app/api/lead/route.ts` currently logs payloads server-side. Wire it to your CRM, webhook, email service (Resend / SendGrid), or database — the validation, honeypot, and success/redirect flow is already in place.

CTA buttons across the site carry `data-cta="…"` attributes for analytics tagging (e.g. via Google Tag Manager).

### Replacing the Open Graph image
A vector OG placeholder lives at `public/og-athena-legal.svg`. For maximum platform compatibility you may want to render a 1200×630 JPG/PNG version and update `siteConfig.ogImage` in `src/lib/site.ts`.

---

## SEO checklist (already wired)

- ✅ Unique metadata per route via Next 14 Metadata API
- ✅ Canonical URLs
- ✅ Open Graph + Twitter cards
- ✅ Auto sitemap (`/sitemap.xml`) covering home, services, blog, legal pages
- ✅ `robots.txt` allowing all, disallowing `/api/` and `/thank-you`
- ✅ JSON-LD: Organization (LegalService), WebSite, Service (per service page), Article (per blog post), FAQPage (home/FAQ/services), BreadcrumbList (every internal page)
- ✅ Semantic HTML — single `<h1>` per page, structured H2/H3 hierarchy
- ✅ SEO-friendly URLs (kebab-case)
- ✅ Image alt text and `next/image` for optimisation
- ✅ Skip-to-content link + visible focus rings (accessibility)
- ✅ Mobile-first responsive layout, sticky bottom CTA
- ✅ 404 page

### AI / GEO answer blocks
The home page includes a "Quick Answers" section with direct answers to:
- What does Athena Legal Solution LLP do?
- Who can contact Athena Legal Solution LLP?
- Does Athena guarantee loan settlement?
- How does the consultation process work?

These are written in plain language and structured so AI search engines (ChatGPT, Gemini, Perplexity, Google AI Overviews) can extract clean entity information.

---

## Compliance notes (built in)

The copy across the site avoids:
- "100% guaranteed settlement"
- "RBI approved"
- "Best lawyer"
- "Guaranteed result"
- "Loan cleared instantly"
- "CIBIL fixed guaranteed"

Footer and `/disclaimer` carry the advisory disclaimer explicitly. The lead form requires an explicit consent checkbox.

---

## Pending manual steps

1. **Install dependencies** — `npm install` (not run as part of this scaffold).
2. **Set real contact details** in `src/lib/site.ts`.
3. **Wire the lead form** to a CRM / webhook / email service in `src/app/api/lead/route.ts`.
4. **Provide a final OG image** (1200×630 PNG/JPG) and update `siteConfig.ogImage` if you replace the SVG.
5. **Add real GA / Meta Pixel / GSC IDs** to `.env.local`.
6. **Add real testimonials / case studies** when available (current copy is representative).
7. **Replace placeholder address and phone numbers** before going live.
8. Run `npm run lint` and `npm run build` to verify a clean production build.

---

## Disclaimer

Athena Legal Solution LLP provides legal and financial advisory support. Information on this website is for general awareness and consultation purposes only. Outcomes in settlement or dispute matters depend on lender policies, documents, case facts, applicable law, and approvals. **No result is guaranteed.**
