import { providers } from "../utils/providers";

const ProviderSelect = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="provider"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        AI Model
      </label>
      <select
        id="provider"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {providers.map((provider) => (
          <option key={provider.id} value={provider.id}>
            {provider.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProviderSelect;
