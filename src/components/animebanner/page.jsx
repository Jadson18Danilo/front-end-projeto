import React from 'react';
import Footer from '../rodape/page';

  const anime = {
    nome: "Jujutsu Kaisen",
    capa: "/jujutsu.jpg",
    banner: "/jujutsu-banner.jpg",
    descricao: "Maldições que assolam o mundo...",
    generos: "Ação, Demônios, Sobrenatural, Shounen",
    ano: 2020,
    temporadas: 2,
    episodios: 47,
  };


export default function AnimeBanner({ anime }) {
  return (
    <div
      className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-start px-6 md:px-12 "
      style={{
        backgroundImage: `url(${anime?.banner || anime?.capa})`,
      }}
    >
      {/* Sobreposição escura */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex items-start gap-6 max-w-6xl mx-auto w-full">
        {/* Capa lateral */}
        <img
          src={anime?.capa}
          alt={anime?.nome}
          className="w-28 h-40 md:w-40 md:h-56 object-cover rounded shadow-md"
        />

        {/* Informações */}
        <div className="text-white max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">{anime?.nome}</h1>
          <p className="text-sm text-slate-300 mb-2">{anime?.generos || "Ação, Sobrenatural, Shounen"}</p>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-3">
            <span>📅 {anime?.ano || 2020}</span>
            <span>🎬 {anime?.temporadas || 2} temporada{anime?.temporadas > 1 ? 's' : ''}</span>
            <span>🎞️ {anime?.episodios || 47} episódios</span>
          </div>

          <p className="text-sm text-slate-200 line-clamp-4">{anime?.descricao}</p>
        </div>
      </div>
    </div>
  );
}
