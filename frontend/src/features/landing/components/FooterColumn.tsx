"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
};

export function FooterColumn({ title, links }: FooterColumnProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10 py-4 md:border-0 md:py-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left md:pointer-events-none"
        aria-expanded={isOpen}
      >
        <h3 className="font-bold">{title}</h3>

        <ChevronDown
          size={18}
          className={`transition-transform md:hidden ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <ul
        className={`mt-3 space-y-2 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-[#6B665F] hover:text-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}