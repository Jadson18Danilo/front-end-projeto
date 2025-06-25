import React from 'react';

export default function Comentarios() {
  return (
    <div className="max-w-4xl mx-auto mt-6 bg-slate-700 p-4 rounded">
      <h2 className="text-lg font-semibold mb-2">💬 Deixe um comentário</h2>
      <textarea
        placeholder="Seu comentário..."
        className="w-full p-3 text-sm bg-slate-800 border border-slate-600 rounded resize-none text-white"
        rows="4"
      />
      <button className="mt-3 px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded text-sm">
        Comentar
      </button>
    </div>
  );
}
