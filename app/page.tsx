"use client";

import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchCotacoes, fetchPrevisao } from "./services/api";
import CotacaoCard from "./cotacoes/page";
import PrevTempCard from "./climatempo/components/PrevTempCard";
import Image from "next/image";

interface Cotacoes {
  dolar: string;
  euro: string;
  btc: string;
}

interface PrevisaoTempo {
  name: string;
  temp: number;
}

export default function Home() {
  const [cotacoes, setCotacoes] = useState<Cotacoes>({
    dolar: "",
    euro: "",
    btc: "",
  });

  const [previsao, setPrevisao] = useState<PrevisaoTempo>({ name: "", temp: 0 });

  const CurrentTime = (): string => {
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();  
    
    return `${horas}:${minutos < 12 ? `0${minutos}` : minutos}`;
  };


  useEffect(() => {
    const loadCotacoes = async () => {
      const cotacoesData = await fetchCotacoes();
      setCotacoes(cotacoesData);
    };

    const loadPrevisao = async () => {
      const previsaoData = await fetchPrevisao();
      setPrevisao(previsaoData);
    };

    loadCotacoes();
    loadPrevisao();
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <header className="bg-gradient-to-b from-gray-900 to-indigo-800 shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">            
            <h1 className="text-2xl font-bold text-white">InfoVerse 🌌</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-yellow-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Parcerias
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-800 to-gray-900 py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-yellow-300">
            O Universo de informações em um só lugar
          </h2>
          <p className="text-gray-300 mb-2">
            De cotações financeiras a previsões do tempo, tudo que você precisa
            está aqui.
          </p>

        </div>
      </section>


      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Cotações */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 min-h-[250px] max-h-[400px]">

          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Cotações de Moedas 💱
          </h3>
          <CotacaoCard title="Dólar" value={`R$ ${cotacoes.dolar}`} />
          <CotacaoCard title="Euro" value={`R$ ${cotacoes.euro}`} />
          <CotacaoCard title="Bitcoin" value={`$ ${cotacoes.btc}`} />
          <div className="flex justify-center w-full">
            <Image
              src="/cotacao.jpg"
              alt=""
              width={200}
              height={150}
              className="rounded-lg w-full md:h-[200px] mt-[20px]"
            />
          </div>
        </div>

        {/* Previsão do Tempo */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 min-h-[250px] max-h-[400px] flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Previsão do Tempo ⛅
          </h3>
          <PrevTempCard name={previsao.name} temp={previsao.temp} />   
          <div className="flex justify-center w-full">
            <Image
              src="/previsao-tempo.jpg"
              alt=""
              width={200}
              height={150}
              className="rounded-lg w-full md:h-[200px]"
            />
          </div>       
        </div>

        {/* Hora Atual */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 min-h-[250px] max-h-[400px]">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Hora Atual 🌍
          </h3>
          <p className="text-gray-400">São Paulo: {CurrentTime()}</p>          
        </div>

        {/* Últimas Notícias */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 min-h-[250px] max-h-[400px]">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Últimas Notícias 📰
          </h3>
          <ul className="text-gray-400 list-disc list-inside">
            <li>Mercado financeiro em alta.</li>
            <li>Exploração espacial avança.</li>
            <li>Previsão da inflação é revisada.</li>
          </ul>
        </div>

        {/* Curiosidades */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 min-h-[150px] max-h-[150px]">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Curiosidades 🤔
          </h3>
          <p className="text-gray-400">
            Sabia que a Lua está se afastando da Terra a cada ano?
          </p>
        </div>

        {/* Taxa SELIC */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 min-h-[150px] max-h-[150px]">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Taxa SELIC 📈
          </h3>
          <p className="text-gray-400">Atual: 13,75% ao ano</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 min-h-[150px] max-h-[150px]">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Noticias dos Games 📈
          </h3>
          <p className="text-gray-400">Atual: 13,75% ao ano</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 min-h-[150px] max-h-[150px]">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Futebol 📈
          </h3>
          <p className="text-gray-400">Atual: 13,75% ao ano</p>
        </div>
      </main>


      {/* Footer */}
      <Footer />
    </div>
  );
}
