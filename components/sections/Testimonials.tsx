import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-sand">
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          eyebrow="Experiencias"
          title={<>Lo que dicen<br />nuestras clientas</>}
          className="mb-10 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-cream p-6 sm:p-9 group hover:shadow-lg transition-all duration-500"
            >
              {/* Decorative quote */}
              <span className="font-heading text-8xl text-nude/40 absolute top-2 right-6 leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} strokeWidth={0} className="w-4 h-4 fill-terracota" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-cacao/80 text-sm leading-relaxed mb-8 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-sand">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-nude flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-body font-semibold text-chocolate text-sm">
                    {t.name}
                  </p>
                  <p className="font-body text-cacao/55 text-[10px] tracking-[0.25em] uppercase mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
