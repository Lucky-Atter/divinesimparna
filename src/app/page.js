import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import pageData from "../data/landing-page-data.json"
export const metadata = {
  title: "Dvine Simparna | Connecting Journeys, Connecting Worlds",
  description:
    "Dvine Simparna – a platform connecting journeys, experiences, and destinations worldwide.",
  keywords: [
    "Dvine Simparna",
    "travel",
    "journeys",
    "experiences",
    "destinations",
  ],
  authors: [{ name: "Dvine Simparna Team" }],
  openGraph: {
    title: "Dvine Simparna",
    description: "Connecting Journeys, Connecting Worlds.",
    url: "https://divinesimparna.vercel.app/",
    siteName: "Dvine Simparna",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
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
