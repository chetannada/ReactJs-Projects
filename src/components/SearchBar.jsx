import { memo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fieldLabels } from "../utils/constant";

const SearchBar = ({ handleSearch, isDisabled, inputSearch, setInputSearch }) => {
  const [searchBy, setSearchBy] = useState("title");

  const handleSubmit = e => {
    e.preventDefault();
    if (!isDisabled) {
      handleSearch({
        query: inputSearch.trim().toLowerCase(),
        field: searchBy,
      });
    }
  };

  const handleSelect = e => {
    setSearchBy(e.target.value);
    setInputSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white border border-purple-300 rounded-xl overflow-hidden"
    >
      <div className="relative w-full">
        <select
          value={searchBy}
          onChange={handleSelect}
          disabled={isDisabled}
          className={`w-full px-3 py-3 mr-6 text-sm border-r border-purple-300 outline-none appearance-none ${
            isDisabled
              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
              : "bg-white text-gray-700 cursor-pointer"
          }`}
        >
          <option value="title"> {!isDisabled && "Title"}</option>
          <option value="status">Status</option>
          <option value="techstack">Tech Stack</option>
          <option value="contributedBy">Contributed By</option>
        </select>

        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          {!isDisabled && (
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
      </div>

      <input
        type="text"
        value={inputSearch}
        onChange={e => setInputSearch(e.target.value)}
        placeholder={isDisabled ? inputSearch : `Search by ${fieldLabels[searchBy]}...`}
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
