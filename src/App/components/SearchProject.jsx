import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchProject = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query.trim().toLowerCase());
  };

  useEffect(() => {
    if (!query) {
      handleSearch(query);
    }
  }, [query]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white border border-purple-300 rounded-xl overflow-hidden"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Projects..."
        className="px-4 py-3 outline-none w-full min-w-72 text-sm text-gray-700 placeholder-gray-400"
      />
      <button
        type="submit"
        className="px-4 py-4 bg-purple-700 hover:bg-purple-800 text-white flex items-center justify-center transition"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchProject;
