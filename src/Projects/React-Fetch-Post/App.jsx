import { useState } from "react";
import PostRequestHooks from "./PostRequestHooks";
import PostRequestAsyncAwait from "./PostRequestAsyncAwait";
import PostRequestErrorHandlingWithTryCatch from "./PostRequestErrorHandling";
import PostRequestSetHeaders from "./PostRequestSetHeaders";

const ReactFetchPostApp = () => {
  const [userName, setUserName] = useState("Chetan");
  const [searchedUserName, setSearchedUserName] = useState("Chetan");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchedUserName(userName);
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-auto p-4 bg-slate-700 border-1 rounded-lg text-center text-3xl text-white">
          React HTTP POST Requests for Reqres API using Fetch in Different way
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="w-full mt-8 flex flex-row flex-wrap gap-3 justify-center items-end ">
          <div className="min-w-96 sm:min-w-64 xsm:min-w-48 flex flex-col gap-1">
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              type="text"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="userName"
              value={userName}
              onChange={handleChange}
              placeholder="Enter your Name"
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
        <PostRequestHooks searchedUserName={searchedUserName} />
        <PostRequestAsyncAwait searchedUserName={searchedUserName} />
        <PostRequestErrorHandlingWithTryCatch
          searchedUserName={searchedUserName}
        />
        <PostRequestSetHeaders searchedUserName={searchedUserName} />
      </div>
    </>
  );
};

export default ReactFetchPostApp;
