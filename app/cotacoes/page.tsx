interface CotacaoCardProps {
    title: string;
    value: string;
  }
  
  const CotacaoCard: React.FC<CotacaoCardProps> = ({ title, value }) => {
    return (
      <div>
        <h3 className="text-gray-400">{title}: {value}</h3>       
      </div>
    );
  };
  
  export default CotacaoCard;
  