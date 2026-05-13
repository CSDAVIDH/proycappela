import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-cream px-6 text-center">
      <Link href="/" className="mb-10">
        <Image
          src="/img/logo.png"
          alt="caPpela"
          width={130}
          height={50}
          className="object-contain"
          priority
        />
      </Link>

      <p className="font-body text-[10px] tracking-[0.5em] uppercase text-nude mb-4">
        Error 404
      </p>
      <h1 className="font-heading text-5xl md:text-7xl font-medium text-chocolate mb-4">
        Página no encontrada
      </h1>
      <p className="font-body text-cacao/65 text-sm leading-relaxed max-w-sm mb-10">
        La página que buscas no existe o fue movida. Vuelve a nuestra colección
        y encuentra tu estilo.
      </p>

      <Link
        href="/"
        className="font-body text-[11px] tracking-[0.2em] uppercase bg-chocolate text-cream px-8 py-4 hover:bg-cacao transition-colors duration-300"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
