"use client";

import Carrossel from "@/components/carrossel/page";
import Hero from "@/components/Hero/page";
import Lancamentos from "@/components/lançamento/page";
import Navbar from "@/components/navbar/page";
import Novidades from "@/components/novidade/page";
import Footer from "@/components/rodape/page";


export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Navbar />
        </div>
        <div className="flex justify-center items-center h-screen">
          <Carrossel />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <Novidades />
        </div>
        <div>
          <Lancamentos />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
