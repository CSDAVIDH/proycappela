import type {
  Collection,
  FooterLinkGroup,
  GalleryPhoto,
  Stat,
  Testimonial,
} from "@/types";

// ── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  "Inicio",
  "Colecciones",
  "Nueva Temporada",
  "Nosotros",
  "Contacto",
] as const;

// ── Collections ─────────────────────────────────────────────────────────────

export const collections: Collection[] = [
  {
    id: 1,
    name: "Colección Primavera",
    category: "Vestidos",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    badge: "New",
  },
  {
    id: 2,
    name: "Línea Nocturna",
    category: "Elegancia",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    badge: "Exclusivo",
  },
  {
    id: 3,
    name: "Esencia Urbana",
    category: "Casual Chic",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
    badge: null,
  },
  {
    id: 4,
    name: "Couture Íntimo",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    badge: "Limited",
  },
];

// ── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Isabella Morales",
    role: "Diseñadora de interiores",
    text: "Cada pieza de CAPELA es una obra de arte. La calidad y el detalle son incomparables. Me siento verdaderamente especial cuando uso sus prendas.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
  {
    id: 2,
    name: "Valentina Torres",
    role: "Empresaria",
    text: "He comprado en muchas boutiques de lujo, pero CAPELA tiene algo diferente. La atención al detalle y la elegancia de sus colecciones me conquistaron desde el primer momento.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80",
  },
  {
    id: 3,
    name: "Sofía Elizalde",
    role: "Directora creativa",
    text: "La colección de otoño es absolutamente impresionante. Las telas, los cortes, todo está pensado para la mujer moderna que valora el estilo y la sofisticación.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=120&q=80",
  },
];

// ── Gallery ──────────────────────────────────────────────────────────────────

export const galleryPhotos: GalleryPhoto[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&q=80", alt: "Look 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80", alt: "Look 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", alt: "Look 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80", alt: "Look 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80", alt: "Look 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80", alt: "Look 6" },
];

// ── Featured stats ────────────────────────────────────────────────────────────

export const featuredStats: Stat[] = [
  { number: "500+", label: "Piezas únicas" },
  { number: "8",    label: "Colecciones" },
  { number: "12k+", label: "Clientas felices" },
];

// ── Footer ───────────────────────────────────────────────────────────────────

export const footerLinkGroups: FooterLinkGroup[] = [
  { title: "Tienda",       links: ["Nuevas llegadas", "Vestidos", "Blazers", "Accesorios", "Sale"] },
  { title: "Información",  links: ["Sobre nosotros", "Lookbook", "Prensa", "Colaboraciones"] },
  { title: "Ayuda",        links: ["Envíos", "Devoluciones", "Tallas", "Contacto", "FAQ"] },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook",  href: "#" },
  { label: "X",         href: "#" },
  { label: "Youtube",   href: "#" },
] as const;
