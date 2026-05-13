export interface Collection {
  id: number;
  name: string;
  category: string;
  image: string;
  badge: string | null;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface FooterLinkGroup {
  title: string;
  links: string[];
}
