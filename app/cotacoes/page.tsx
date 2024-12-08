import CotacaoCard from "./components/CotacaoCard";
import { fetchCotacoes } from "../services/api"; 

export default async function Cotacao() {
  
  const cotacoes = await fetchCotacoes();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Cotações</h1>
      {cotacoes.dolar !== "Erro ao carregar" ? (
        <>
          <CotacaoCard title="Dólar" value={`R$ ${cotacoes.dolar}`} />
          <CotacaoCard title="Euro" value={`R$ ${cotacoes.euro}`} />
          <CotacaoCard title="Bitcoin" value={`$ ${cotacoes.btc}`} />
        </>
      ) : (
        <p className="text-red-500">Erro ao carregar os dados das cotações.</p>
      )}
    </div>
  );
}