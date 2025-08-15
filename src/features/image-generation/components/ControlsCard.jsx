import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import ProviderSelect from "./ProviderSelect";
import DimensionSelect from "./DimensionSelect";
import StylePresets from "./StylePresets";
import KeywordChips from "./KeywordChips";

const ControlsCard = ({
  prompt,
  count,
  dimensions,
  provider,
  setPrompt,
  setCount,
  setDimensions,
  setProvider,
  onSubmit,
}) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const handleKeywordSelect = (text) => {
    setPrompt((prev) => (prev ? `${prev}, ${text}` : text));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <form onSubmit={onSubmit} className="space-y-6">
        <StylePresets onSelect={handleKeywordSelect} />

        <div>
          <label
            htmlFor="prompt"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Prompt
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
            placeholder="A futuristic cityscape at sunset..."
          />
        </div>

        <KeywordChips onSelect={handleKeywordSelect} />

        <button
          type="button"
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className="w-full flex items-center justify-between text-sm text-gray-600 hover:text-gray-800"
        >
          <span>Advanced Settings</span>
          {isAdvancedOpen ? (
            <ChevronUpIcon className="w-4 h-4" />
          ) : (
            <ChevronDownIcon className="w-4 h-4" />
          )}
        </button>

        {isAdvancedOpen && (
          <div className="space-y-6 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProviderSelect value={provider} onChange={setProvider} />
              <DimensionSelect value={dimensions} onChange={setDimensions} />

              <div>
                <label
                  htmlFor="count"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Image Count
                </label>
                <input
                  id="count"
                  type="number"
                  min="1"
                  max="4"
                  value={count}
                  onChange={(e) =>
                    setCount(Math.min(4, Math.max(1, e.target.value)))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Generate Images
        </button>
      </form>
    </div>
  );
};
export default ControlsCard;
