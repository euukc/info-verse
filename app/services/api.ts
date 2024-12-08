import axios from 'axios';


//Cotações
const baseUrlCotacoes = 'http://localhost:3001/api';

export const fetchCotacoes = async () => {
    try {
        const [dolar, euro, btc] = await Promise.all([
            axios.get(`${baseUrlCotacoes}/cotacaoDolar`),
            axios.get(`${baseUrlCotacoes}/cotacaoEuro`),
            axios.get(`${baseUrlCotacoes}/cotacaoBitcoin`),
        ]);

        return {
            dolar: parseFloat(dolar.data.USDBRL.high).toFixed(2),
            euro: parseFloat(euro.data.EURBRL.high).toFixed(2),
            btc: parseFloat(btc.data.BTCBRL.high).toFixed(2),
        };

    } catch (error) {
        console.error('Erro ao buscar as cotações:', error);
        return {
            dolar: 'Erro ao carregar',
            euro: 'Erro ao carregar',
            btc: 'Erro ao carregar',
        };
    }
};

//Previsão do Tempo
const UrlPrevisao = 'http://localhost:3001/api/prevTempo';

export const fetchPrevisao = async () => {
  try {
    const response = await axios.get(UrlPrevisao);
    const { name, main } = response.data;
    
    return {
      name,
      temp: main.temp, 
    };
  } catch (error) {
    console.error('Erro ao buscar a previsão do tempo:', error);
    return { name: 'Erro', temp: 0 };
  }
};
