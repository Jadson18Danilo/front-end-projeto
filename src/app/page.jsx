"use client";


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
