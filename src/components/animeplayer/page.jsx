
import React from 'react';

export default function AnimePlayer() {
  return (
    <div className="flex-1 bg-slate-900 rounded shadow-lg overflow-hidden">
      <video
        controls
        poster="/jujutsu-thumb.jpg"
        className="w-full h-[300px] bg-black"
      >
        <source src="/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      <div className="flex justify-between px-4 py-2 bg-slate-800 text-sm">
        <button className="hover:underline">◀ Anterior</button>
        <button className="hover:underline">Próximo ▶</button>
      </div>

      <div className="divide-y divide-slate-700">
        <button className="w-full text-left px-4 py-3 hover:bg-slate-700">📄 Legendado</button>
        <button className="w-full text-left px-4 py-3 hover:bg-slate-700">🎤 Dublado</button>
      </div>
    </div>
  );
}
