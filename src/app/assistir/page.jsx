'use client'

import AnimeBanner from "@/components/AnimeBanner";
import AnimePlayer from "@/components/AnimePlayer";
import Temporadas from "@/components/Temporadas";
import Comentarios from "@/components/Comentarios";
import { use, useState } from "react";

export default function AnimePage() {
  const [temporadaSelecionada, setTemporadaSelecionada] = useState(1);

  return (
    <div className="bg-slate-800 text-white min-h-screen px-4 py-6">
      <AnimeBanner />
      <div className="max-w-6xl mx-auto mt-6 flex flex-col lg:flex-row gap-6">
        <AnimePlayer />
        <Temporadas
          temporada={temporadaSelecionada}
          setTemporada={setTemporadaSelecionada}
        />
      </div>
      <Comentarios />
    </div>
  );
}
