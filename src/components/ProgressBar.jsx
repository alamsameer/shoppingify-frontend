

const ProgressComponent = ({ percentage,name,color }) => {
    const fillStyle = {
        width: `${percentage}%`,
        backgroundColor:`${color}`
    };

    return (
        <div>
            <p className="text-sm text-gray-400 font-light">{name}</p>
            <div className="w-48 md:w-72 h-3  bg-lightgray rounded-md overflow-hidden shadow-md">
                <div className="h-full transition-all duration-500 rounded-full " style={fillStyle}></div>
            </div>
        </div>
    );
};

export default ProgressComponent