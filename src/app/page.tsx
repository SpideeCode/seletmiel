import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import TapzyShowcase from "@/components/TapzyShowcase";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <TapzyShowcase />
      <Locations />
      <Footer />
    </main>
  );
}
