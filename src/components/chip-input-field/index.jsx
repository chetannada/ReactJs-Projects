import { useState } from "react";
import { toast } from "react-hot-toast";

const ChipInputField = ({ value, onChange, max = 4, placeholder }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (value.length >= max) {
      toast.error(`You can add up to ${max} tech stacks only.`);
      return;
    }
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
      setInput("");
    }
  };

  const handleRemove = (index) => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <div
      className={`flex flex-wrap items-center px-2 py-2 border rounded-md text-sm border-gray-300 focus-within:ring-2 focus-within:ring-blue-500`}
    >
      {value.map((tech, index) => (
        <span
          key={index}
          className="flex items-center gap-1 px-2 py-1 mr-2 mb-1 text-xs font-medium text-gray-800 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 rounded-full shadow-sm"
        >
          {tech}
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="text-red-500 hover:text-red-700 text-xs"
          >
            ✕
          </button>
        </span>
      ))}

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
          }
        }}
        placeholder={placeholder || "Add tech used in your project..."}
        className="flex-grow min-w-[120px] px-2 py-1 outline-none text-sm"
      />
    </div>
  );
};

export default ChipInputField;
