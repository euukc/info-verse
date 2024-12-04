
export default function Home() {
  return (
    <>

      <header class="bg-gray-800 shadow-md">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-indigo-400">InfoVerse 🌌</h1>
          <nav>
            <ul class="flex space-x-6">
              <li><a href="#" class="hover:text-indigo-400">Home</a></li>
              <li><a href="#" class="hover:text-indigo-400">APIs</a></li>
              <li><a href="#" class="hover:text-indigo-400">About</a></li>
              <li><a href="#" class="hover:text-indigo-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>


      <main class="container mx-auto px-4 py-8">
        <section class="text-center mb-12">
          <h2 class="text-4xl font-extrabold mb-4">O Universo de Informações em um Só Lugar</h2>
          <p class="text-gray-400">De cotações financeiras a previsões do tempo, tudo que você precisa está aqui.</p>
        </section>


        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-indigo-400 mb-3">Cotações de Moedas 💱</h3>
            <p class="text-gray-400">Dólar: R$5,23 | Euro: R$6,18</p>
            <p class="text-gray-400">Bitcoin: $38,500</p>
          </div>


          <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-indigo-400 mb-3">Previsão do Tempo ⛅</h3>
            <p class="text-gray-400">São Paulo: 25°C, Sol</p>
            <p class="text-gray-400">Nova York: 15°C, Chuva</p>
          </div>


          <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-indigo-400 mb-3">Hora Atual 🌍</h3>
            <p class="text-gray-400">São Paulo: 14:23</p>
            <p class="text-gray-400">Tóquio: 02:23</p>
          </div>


          <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-indigo-400 mb-3">Últimas Notícias 📰</h3>
            <ul class="text-gray-400 list-disc list-inside">
              <li>Mercado financeiro em alta.</li>
              <li>Exploração espacial avança.</li>
              <li>Previsão da inflação é revisada.</li>
            </ul>
          </div>


          <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-indigo-400 mb-3">Curiosidades 🤔</h3>
            <p class="text-gray-400">Sabia que a Lua está se afastando da Terra a cada ano?</p>
          </div>


          <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-indigo-400 mb-3">Taxa SELIC 📈</h3>
            <p class="text-gray-400">Atual: 13,75% ao ano</p>
          </div>
        </section>
      </main>


      <footer class="bg-gray-800 py-4 mt-12">
        <div class="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2024 InfoVerse. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div >
    
  );
}
