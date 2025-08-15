import { KEYWORD_SHORTCUTS } from "../utils/presets";

const KeywordChips = ({ onSelect }) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Keywords</h3>
      <div className="flex flex-wrap gap-2">
        {KEYWORD_SHORTCUTS.map((keyword) => (
          <button
            key={keyword}
            type="button"
            onClick={() => onSelect(keyword)}
            className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors border border-gray-200 hover:border-blue-300"
          >
            {keyword}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeywordChips;
