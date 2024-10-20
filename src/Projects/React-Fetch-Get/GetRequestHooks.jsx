import { useState, useEffect } from "react";

const GetRequestHooks = (props) => {
  const { searchedPackageName } = props;

  const [npmReactData, setNpmReactData] = useState("");

  // Simple GET request using fetch
  useEffect(() => {
    const API_NPM = import.meta.env.VITE_API_NPM;

    fetch(API_NPM + `v2/search?q=${searchedPackageName}`)
      .then((response) => response.json())
      .then((data) => setNpmReactData(data));
  }, [searchedPackageName]);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 bg-slate-200 border-4 rounded-xl mt-3 text-2xl font-medium">
          Simple Get request using Fetch
        </h1>
        <h2 className="flex flex-row justify-center flex-wrap gap-2 max-sm h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 border-4 text-2xl bg-slate-50 rounded-xl">
          Total {searchedPackageName} Packages in NPM:
          <span className="text-red-800">{npmReactData?.total}</span>
        </h2>
      </div>
    </>
  );
};

export default GetRequestHooks;
