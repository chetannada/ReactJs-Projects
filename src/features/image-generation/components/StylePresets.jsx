import { ART_STYLES } from "../utils/presets";

const StylePresets = ({ onSelect }) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Style Presets</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {ART_STYLES.map((style) => (
          <button
            key={style.name}
            type="button"
            onClick={() => onSelect(style.prompt)}
            className="p-2 bg-white border border-gray-200 rounded-md hover:border-blue-500 transition-colors text-left group"
          >
            <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
              {style.name}
            </h4>
            <p className="text-xs text-gray-500 line-clamp-2">{style.prompt}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StylePresets;
