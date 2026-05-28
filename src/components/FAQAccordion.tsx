'use client';

import { useState } from 'react';
import { ChevronDownIcon } from './Icons';

export type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-soft overflow-hidden rounded-2xl border border-slate-soft bg-white shadow-sm">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        const panelId = `faq-panel-${idx}`;
        const btnId = `faq-btn-${idx}`;
        return (
          <div key={idx}>
            <button
              type="button"
              id={btnId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-navy transition hover:bg-slate-soft/60 md:px-6"
            >
              <span className="text-base font-semibold md:text-lg">{item.q}</span>
              <ChevronDownIcon
                className={`h-5 w-5 shrink-0 text-gold transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-relaxed text-navy/75 md:px-6 md:text-[15px]"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
