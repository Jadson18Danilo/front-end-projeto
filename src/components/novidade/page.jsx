import React from 'react'


export default function Novidades() {
  return (
    <section className="bg-slate-900 text-white py-10">
      <h2 className="text-3xl text-center mb-6">NOVIDADES</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-[150px] h-[220px] bg-slate-700 rounded shadow-md flex flex-col justify-end">
            <div className="bg-slate-800 p-2 text-center">
              <p className="text-xs">Leg / Dub</p>
              <p className="text-sm font-semibold">Nome do Anime</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
