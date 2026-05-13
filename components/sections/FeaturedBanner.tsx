import Image from "next/image";
import { featuredStats } from "@/lib/data";
import { Button } from "@/components/ui";

export default function FeaturedBanner() {
  return (
    <section className="overflow-hidden bg-sand">
      <div className="grid lg:grid-cols-2">

        {/* Left – content */}
        <div className="flex items-center justify-center px-6 sm:px-10 lg:px-16 py-14 sm:py-20 lg:py-28 bg-gradient-to-br from-sand via-sand to-nude/30">
          <div className="max-w-lg">
            <p className="font-body text-terracota text-[10px] tracking-[0.55em] uppercase mb-5">
              Temporada 2025
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-chocolate font-medium leading-tight mb-6">
              La nueva temporada<br />ha llegado
            </h2>
            <p className="font-body text-cacao/75 text-base leading-relaxed mb-10">
              Piezas diseñadas para la mujer moderna que busca elegancia sin
              sacrificar su esencia. Cada prenda es una declaración de estilo.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
              <Button variant="primary">Descubrir colección</Button>
              <button className="font-body text-[11px] tracking-[0.22em] uppercase py-4 border-b border-chocolate/40 text-chocolate hover:text-terracota hover:border-terracota transition-colors duration-300">
                Ver lookbook →
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-10 pt-8 border-t border-nude/60">
              {featuredStats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-2xl text-chocolate font-medium">
                    {s.number}
                  </p>
                  <p className="font-body text-[9px] text-cacao/55 tracking-[0.3em] uppercase mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right – image */}
        <div className="relative min-h-[280px] sm:min-h-[420px] lg:min-h-[560px]">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80"
            alt="Nueva temporada de moda femenina"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-sand/30" />
        </div>

      </div>
    </section>
  );
}
