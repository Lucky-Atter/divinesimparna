import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import pageData from "../data/landing-page-data.json"
export default function Home() {
  return (
    <>
      <Header data={pageData['header-sec']} />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer data={pageData['footer-sec']} />
    </>
  );
}
