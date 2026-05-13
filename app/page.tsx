import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  Collections,
  FeaturedBanner,
  InstagramGallery,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Collections />
      <FeaturedBanner />
      <InstagramGallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
