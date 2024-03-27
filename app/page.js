import Hero from "@/components/Hero";
import HomeProducts from "@/components/HomeProducts";
import Image from "next/image";
import {data} from '../data/data.json' 
import FooterTop from "@/components/FooterTop";
import Footer from "@/components/Footer";
export default function Home() {
  
  return (
    <>
      <Hero />
      <main>
        <HomeProducts />
      </main>
      <FooterTop />
      <Footer />
    </>
  );
}
