"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { Button } from "@/components/ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/img/logo.png"
              alt="caPpela"
              width={130}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href="#"
                className="font-body text-[11px] tracking-[0.18em] uppercase text-cacao hover:text-terracota transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-5">
            <ShoppingBag
              strokeWidth={1.5}
              className="w-5 h-5 text-cacao cursor-pointer hover:text-terracota transition-colors"
            />
            <Button size="sm">Comprar</Button>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Menú"
            className="lg:hidden text-chocolate"
            onClick={() => setOpen(!open)}
          >
            {open
              ? <X strokeWidth={1.5} className="w-6 h-6" />
              : <Menu strokeWidth={1.5} className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-cream/98 backdrop-blur-md ${
          open ? "max-h-96 border-t border-sand" : "max-h-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              href="#"
              className="font-body text-xs tracking-[0.2em] uppercase text-cacao hover:text-terracota transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          ))}
          <Button size="sm" className="w-fit mt-2">Comprar</Button>
        </div>
      </div>
    </nav>
  );
}
