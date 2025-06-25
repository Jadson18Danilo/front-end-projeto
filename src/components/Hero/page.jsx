import React from 'react';



export default function Hero() {
  return (
    <section className="relative bg-cover bg-center h-[500px]" style={{backgroundImage: "url('/fireforce.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-10">
        <h1 className="text-6xl font-bold text-white">JUJUTSU <br/> KAISEN</h1>
        <p className="text-white max-w-md mt-4">
          JUJUTSU KAISEN é um mangá escrito e ilustrado por Gege Akutami, serializado na Weekly Shonen Jump. Uma adaptação para anime foi lançada logo depois, com animação pelo estúdio MAPPA. Atualmente, já possui algumas temporadas, com a 1ª temporada (24 episódios) sendo seguida pelo aclamado filme prequel JUJUTSU KAISEN 0 e, em seguida, a 2ª temporada sendo lançada em julho de 2023. A série está disponível em versão legendada e dublada.
        </p>
        <button className="mt-6 px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded">Começar</button>
      </div>
    </section>
  );
}
