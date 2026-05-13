import Image from "next/image";
import { Camera } from "lucide-react";
import { galleryPhotos } from "@/lib/data";
import { Button, InstagramIcon } from "@/components/ui";

export default function InstagramGallery() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 text-terracota">
            <InstagramIcon />
            <p className="font-body text-[11px] tracking-[0.35em] uppercase">
              @capelafashion
            </p>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl text-chocolate font-medium mb-4">
            Síguenos
          </h2>
          <p className="font-body text-cacao/65 text-sm max-w-xs mx-auto leading-relaxed">
            Forma parte de nuestra comunidad y comparte tu estilo
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 lg:gap-2">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden bg-sand cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/35 transition-all duration-500 flex items-center justify-center">
                <Camera
                  strokeWidth={1.5}
                  className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-7 h-7"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">Ver más en Instagram</Button>
        </div>

      </div>
    </section>
  );
}
