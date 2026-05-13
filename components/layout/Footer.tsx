import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { footerLinkGroups, SOCIAL_LINKS } from "@/lib/data";
import { Button, SOCIAL_ICON_MAP } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="bg-chocolate text-cream">

      {/* Newsletter */}
      <div className="border-b border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <p className="font-body text-nude text-[10px] tracking-[0.5em] uppercase mb-3">
                Newsletter
              </p>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium mb-2">
                Únete al mundo caPpela
              </h3>
              <p className="font-body text-cream/55 text-sm leading-relaxed">
                Recibe las últimas colecciones, eventos exclusivos y ofertas
                especiales directamente en tu correo.
              </p>
            </div>

            <form className="flex">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-cream/10 text-cream placeholder:text-cream/35 font-body text-sm px-6 py-4 outline-none border border-cream/15 focus:border-nude transition-colors min-w-0"
              />
              <Button
                type="submit"
                variant="light"
                size="sm"
                className="rounded-none flex items-center gap-2 bg-nude text-chocolate hover:bg-terracota hover:text-cream"
              >
                <span className="hidden sm:inline">Suscribirse</span>
                <ArrowRight strokeWidth={1.5} className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/img/logo.png"
                alt="caPpela"
                width={120}
                height={46}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-body text-cream/55 text-sm leading-relaxed mb-8">
              Moda femenina premium que celebra la elegancia y la sofisticación
              en cada prenda.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = SOCIAL_ICON_MAP[label];
                return (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 border border-cream/20 flex items-center justify-center hover:border-nude hover:text-nude transition-all duration-300"
                  >
                    {Icon && <Icon />}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Link groups */}
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-body text-[10px] tracking-[0.45em] uppercase text-cream/75 mb-6">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-body text-sm text-cream/45 hover:text-nude transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-cream/35 text-xs tracking-widest">
            © 2025 caPpela. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Privacidad", "Términos", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-body text-cream/35 text-xs tracking-widest hover:text-cream/65 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Dev credit */}
      <div className="bg-chocolate py-3 text-center">
        <p className="font-body text-cream/25 text-[10px] tracking-[0.3em] hover:text-cream transition-colors duration-300 cursor-default">
          @DHCS.dev
        </p>
      </div>

    </footer>
  );
}
