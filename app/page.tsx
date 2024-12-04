"use client"

import Footer from "./components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

interface Cotacoes {
  dolar: string;
  euro: string;
  btc: string;
}



export default function Home() {
  const [cotacoes, setCotacoes] = useState<Cotacoes>({
    dolar: '',
    euro: '',
    btc: '',
  });

  const apiCotacaoDolar = 'http://localhost:3001/api/cotacaoDolar';
  const apiCotacaoEuro = 'http://localhost:3001/api/cotacaoEuro';
  const apiCotacaoBtc = 'http://localhost:3001/api/cotacaoBitcoin';

  useEffect(() => {
    const fetchCotacoes = async () => {
      try {        
        const [dolar, euro, btc] = await Promise.all([
          axios.get(apiCotacaoDolar),
          axios.get(apiCotacaoEuro),
          axios.get(apiCotacaoBtc)
        ]);
        
        const cotacoesFormatadas = {
          dolar: parseFloat(dolar.data.USDBRL.high).toFixed(2),
          euro: parseFloat(euro.data.EURBRL.high).toFixed(2),
          btc: parseFloat(btc.data.BTCBRL.high).toFixed(2)
        };

        
        setCotacoes(cotacoesFormatadas);
      } catch (error) {
        console.error("Erro ao buscar a cotação atual:", error);
        setCotacoes({
          dolar: 'Erro ao carregar',
          euro: 'Erro ao carregar',
          btc: 'Erro ao carregar'
        });
      }
    };

    fetchCotacoes();

    const intervalo = setInterval(fetchCotacoes, 10000);
    return () => clearInterval(intervalo);
  }, []);


  return (
    <div>
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-400">InfoVerse 🌌</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-indigo-400">Home</a></li>
              <li><a href="#" className="hover:text-indigo-400">About</a></li>
              <li><a href="#" className="hover:text-indigo-400">Contato</a></li>
              <li><a href="#" className="hover:text-indigo-400">Parcerias</a></li>
            </ul>
          </nav>
        </div>
      </header>


      <main className="container mx-auto px-4 py-8 min-h-screen">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">O Universo de informações em um só lugar</h2>
          <p className="text-gray-400">De cotações financeiras a previsões do tempo, tudo que você precisa está aqui.</p>
        </section>


        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-r from-purple-700 to-indigo-700 p-4 sm:p-6 rounded-lg shadow-lg">

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-400 mb-3">Cotações de Moedas 💱</h3>
            <p className="text-gray-400">Dólar: R${cotacoes.dolar} | Euro: R${cotacoes.euro}</p>
            <p className="text-gray-400">Bitcoin: ${cotacoes.btc}</p>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-400 mb-3">Previsão do Tempo ⛅</h3>
            <p className="text-gray-400">São Paulo: 25°C, Sol</p>
            <p className="text-gray-400">Nova York: 15°C, Chuva</p>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-400 mb-3">Hora Atual 🌍</h3>
            <p className="text-gray-400">São Paulo: 14:23</p>
            <p className="text-gray-400">Tóquio: 02:23</p>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ">
            <h3 className="text-xl font-semibold text-indigo-400 mb-3">Últimas Notícias 📰</h3>
            <ul className="text-gray-400 list-disc list-inside">
              <li>Mercado financeiro em alta.</li>
              <li>Exploração espacial avança.</li>
              <li>Previsão da inflação é revisada.</li>
            </ul>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-400 mb-3">Curiosidades 🤔</h3>
            <p className="text-gray-400">Sabia que a Lua está se afastando da Terra a cada ano?</p>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-400 mb-3">Taxa SELIC 📈</h3>
            <p className="text-gray-400">Atual: 13,75% ao ano</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-400 mb-3">Placar Ao Vivo - E-sports 🎮</h3>
            <p className="text-gray-400">Counter-Strike</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-400 mb-3">Placar Ao Vivo - Futebol ⚽</h3>
            <p className="text-gray-400">Counter-Strike</p>
          </div>
        </section>
      </main>

      <Footer />
    </div >

  );
}
