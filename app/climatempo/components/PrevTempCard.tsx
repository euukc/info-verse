interface PrevisaoTempoProps {
    name: string;
    temp: number;
  }
  
  const PrevTempCard: React.FC<PrevisaoTempoProps> = ({ name, temp }) => {
    return (
      <div>
        <h3 className="text-gray-400">{name}: {temp}°C</h3>
      </div>
    );
  };
  
  export default PrevTempCard;
  