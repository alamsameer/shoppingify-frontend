

const ProgressComponent = ({ percentage }) => {
    const fillStyle = {
      width: `${percentage}%`,
    };
  
    return (
      <div className="w-48 h-6 bg-lightgray rounded-md overflow-hidden">
        <div className="h-full bg-green-500 transition-all duration-500" style={fillStyle}></div>
      </div>
    );
  };

export default ProgressComponent