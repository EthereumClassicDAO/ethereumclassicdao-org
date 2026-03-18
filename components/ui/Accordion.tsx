"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[var(--divider)]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold transition-colors hover:text-[var(--text-primary)]"
          >
            {item.question}
            <ChevronDown
              size={16}
              className={`shrink-0 text-[var(--text-subtle)] transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className="grid transition-all duration-300"
            style={{
              gridTemplateRows: openIndex === i ? "1fr" : "0fr",
            }}
          >
            <div className="overflow-hidden">
              <p className="pb-5 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
