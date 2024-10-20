import { useState } from "react";
import GetRequestAsyncAwait from "./GetRequestAsyncAwait";
import GetRequestErrorHandlingWithTryCatch from "./GetRequestErrorHandling";
import GetRequestSetHeaders from "./GetRequestSetHeaders";
import GetRequestHooks from "./GetRequestHooks";

const ReactFetchGetApp = () => {
  const [packageName, setPackageName] = useState("React");
  const [searchedPackageName, setSearchedPackageName] = useState("React");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchedPackageName(packageName);
  };

  const handleChange = (event) => {
    setPackageName(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-auto p-4 bg-slate-700 border-1 rounded-lg text-center text-3xl text-white">
          React HTTP GET Requests for NPM API using Fetch in Different way
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="w-full mt-8 flex flex-row flex-wrap gap-3 justify-center items-end ">
          <div className="min-w-96 sm:min-w-64 xsm:min-w-48 flex flex-col gap-1">
            <label htmlFor="npmPackage">NPM Packages</label>
            <input
              id="npmPackage"
              type="text"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="npmPackage"
              value={packageName}
              onChange={handleChange}
              placeholder="Search NPM Packages"
              required
            />
          </div>

          <button
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <div className="my-5 space-y-5">
        <GetRequestHooks searchedPackageName={searchedPackageName} />
        <GetRequestAsyncAwait searchedPackageName={searchedPackageName} />
        <GetRequestErrorHandlingWithTryCatch
          searchedPackageName={searchedPackageName}
        />
        <GetRequestSetHeaders searchedPackageName={searchedPackageName} />
      </div>
    </>
  );
};

export default ReactFetchGetApp;
