import { memo, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ handleSearch, isDisabled }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      handleSearch(query.trim().toLowerCase());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white border border-purple-300 rounded-xl overflow-hidden"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={isDisabled ? query : "Search project by name..."}
        disabled={isDisabled}
        className={`px-4 py-3 outline-none w-full min-w-108 sm:min-w-72 xsm:min-w-52 xmob:min-w-40 text-sm ${
          isDisabled ? "text-gray-500 bg-gray-100" : "text-gray-700"
        } placeholder-gray-400`}
      />
      <button
        type="submit"
        disabled={isDisabled}
        className={`px-4 py-4 ${
          isDisabled ? "bg-gray-300" : "bg-purple-700 hover:bg-purple-800"
        } text-white flex items-center justify-center transition`}
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default memo(SearchBar);
