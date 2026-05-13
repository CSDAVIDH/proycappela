import Image from "next/image";
import { collections } from "@/lib/data";
import { SectionHeader, Button } from "@/components/ui";

export default function Collections() {
  return (
    <section id="collections" className="py-28 px-6 lg:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">

        <SectionHeader eyebrow="Nuestras Piezas" title="Colecciones" className="mb-16" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col) => (
            <div key={col.id} className="group cursor-pointer">

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/25 transition-all duration-500" />

                {col.badge && (
                  <span className="absolute top-4 left-4 bg-terracota text-cream font-body text-[9px] tracking-[0.25em] uppercase px-3 py-1.5">
                    {col.badge}
                  </span>
                )}

                <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button variant="light" size="sm">Ver colección</Button>
                </div>
              </div>

              {/* Info */}
              <div className="mt-5 pb-2">
                <p className="font-body text-terracota text-[10px] tracking-[0.3em] uppercase mb-1.5">
                  {col.category}
                </p>
                <h3 className="font-heading text-[1.05rem] text-chocolate font-medium">
                  {col.name}
                </h3>
                <div className="w-6 h-px bg-nude mt-3 group-hover:w-14 transition-all duration-500" />
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button variant="outline" size="lg">Ver todas las colecciones</Button>
        </div>

      </div>
    </section>
  );
}
