import React from 'react';

export default function AnimeBanner() {
  return (
    <div className="bg-cover bg-center relative h-60 flex items-end p-4"
      style={{ backgroundImage: "url('/jujutsu-banner.jpg')" }}>
      <div className="bg-black bg-opacity-60 p-4 rounded w-full max-w-4xl mx-auto flex gap-4">
        <img src="/jujutsu-cover.jpg" alt="Capa" className="w-24 rounded shadow" />
        <div>
          <h1 className="text-2xl font-bold">Jujutsu Kaisen</h1>
          <p className="text-sm mt-2 text-slate-300">
            Ação, Demônios, Shounen - 2020<br />
            Maldições se espalham pelo mundo moderno e apenas feiticeiros jujutsu podem enfrentá-las.
          </p>
        </div>
      </div>
    </div>
  );
}
