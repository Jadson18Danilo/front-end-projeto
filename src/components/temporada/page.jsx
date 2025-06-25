import React from "react";

export default function Temporadas({ temporada, setTemporada }) {
  return (
    <div className="w-full lg:w-40">
      {[1, 2].map((num) => (
        <button
          key={num}
          onClick={() => setTemporada(num)}
          className={`w-full py-3 px-4 mb-2 rounded text-left font-semibold 
            ${temporada === num ? 'bg-slate-700 text-white' : 'bg-slate-600 text-slate-300 hover:bg-slate-500'}`}
        >
          {num} Temporada
        </button>
      ))}
    </div>
  );
}
