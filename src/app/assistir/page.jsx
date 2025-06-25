'use client'

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/page";
import AnimeBanner from "@/components/animebanner/page";
import AnimePlayer from "@/components/animeplayer/page";
import Comentarios from "@/components/comentarios/page";
import Temporadas from "@/components/temporada/page";
import Footer from "@/components/rodape/page";

export default function AssistirPage() {
  const [temporada, setTemporada] = useState(1);
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("animeSelecionado");
    if (stored) setAnime(JSON.parse(stored));
  }, []);

  return (
    <div className="bg-slate-800 text-white min-h-screen">
      <div className="fixed w-full z-50 bg-[#B8C3D7]/35 backdrop-blur-lg">
      <Navbar />
      </div>

      < AnimeBanner />

      <AnimePlayer />
      <Temporadas />

      <Comentarios />

      <Footer />

      </div>
      


  );
}