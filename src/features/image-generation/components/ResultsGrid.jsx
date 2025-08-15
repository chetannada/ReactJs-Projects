const ResultsGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((imgUrl, index) => (
        <div key={index} className="relative group">
          <img
            src={imgUrl}
            alt={`Generated ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-200 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Image {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsGrid;
