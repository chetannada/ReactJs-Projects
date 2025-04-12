import { providers } from "../utils/providers";

const DimensionSelect = ({ value, onChange }) => {
  const currentProvider = providers.find((p) => p.id === "flux"); // Simplified for example

  return (
    <div>
      <label
        htmlFor="dimensions"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Dimensions
      </label>
      <select
        id="dimensions"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {currentProvider.dimensions.map((dim) => (
          <option key={dim} value={dim}>
            {dim}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DimensionSelect;
