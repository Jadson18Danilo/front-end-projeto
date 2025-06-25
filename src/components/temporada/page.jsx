import React from "react";

export default function Temporadas({ temporada, setTemporada }) {
  return (
    <div className="w-full lg:w-40 mb-6">
      <label htmlFor="temporada" className="block mb-2 font-semibold text-white">
        Selecionar Temporada
      </label>
      <select
        id="temporada"
        value={temporada}
        onChange={(e) => setTemporada(Number(e.target.value))}
        className="w-full bg-slate-700 text-white p-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-slate-500"
      >
        {[1, 2].map((num) => (
          <option key={num} value={num}>
            {num}ª Temporada
          </option>
        ))}
      </select>
    </div>
  );
}
