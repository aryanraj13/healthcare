import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Animation from "@/components/Animation";
import Services from "./services/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="pt-6">
      <Hero/>
      <About/>
      <Services/>
      <FAQ/>
      <Animation/>
      <Contact/>
      <Footer/>
      </main>
    </div>
  );
}
