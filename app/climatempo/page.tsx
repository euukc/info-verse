import PrevTempCard from "./components/PrevTempCard";
import { fetchPrevisao } from "../services/api"; 

export default async function ClimaTempoPage() {
  
  const previsao = await fetchPrevisao();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Previsão do Tempo</h1>
      {previsao.name !== "Erro" ? (
        <PrevTempCard name={previsao.name} temp={previsao.temp} />
      ) : (
        <p className="text-red-500">Erro ao carregar os dados da previsão do tempo.</p>
      )}
    </div>
  );
}
