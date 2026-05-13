import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">

      <Image
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=85"
        alt="Elegante modelo de moda femenina"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-chocolate/65 via-chocolate/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-chocolate/45 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
          <div className="max-w-xl pt-20">
            <p className="font-body text-nude text-[10px] tracking-[0.5em] uppercase mb-5 sm:mb-7">
              Nueva Colección · 2025
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-medium leading-[1.08] mb-5 sm:mb-7">
              Elegancia<br />que define<br />tu estilo
            </h1>
            <p className="font-body text-cream/75 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-sm">
              Piezas únicas que fusionan sofisticación contemporánea con
              feminidad atemporal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#collections"
                className="bg-cream text-chocolate font-body text-[11px] tracking-[0.22em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 hover:bg-nude transition-colors duration-300"
              >
                Explorar colección
              </Link>
              <Link
                href="#"
                className="border border-cream/60 text-cream font-body text-[11px] tracking-[0.22em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 hover:bg-cream/10 transition-colors duration-300"
              >
                Nuestra historia
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none">
        <span className="font-body text-cream/50 text-[9px] tracking-[0.4em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/50 to-transparent" />
      </div>

    </section>
  );
}
