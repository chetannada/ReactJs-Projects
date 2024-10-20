import { useState, useEffect } from "react";

const GetRequestSetHeaders = (props) => {
  const { searchedPackageName } = props;

  const [npmReactData, setNpmReactData] = useState("");

  // GET request using fetch with set headers
  useEffect(() => {
    const API_NPM = import.meta.env.VITE_API_NPM;

    async function getData() {
      const reqOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        mode: "cors",
      };
      const response = await fetch(
        API_NPM + `v2/search?q=${searchedPackageName}`,
        reqOptions
      );
      const json = await response.json();
      setNpmReactData(json);
    }

    getData();
  }, [searchedPackageName]);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 bg-slate-200 border-4 rounded-xl mt-3 text-2xl font-medium">
          GET request using Fetch with Set Headers
        </h1>
        <h2 className="flex flex-row justify-center flex-wrap gap-2 max-sm h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 border-4 text-2xl bg-slate-50 rounded-xl">
          Total {searchedPackageName} Packages in NPM:
          <span className="text-red-800">{npmReactData?.total}</span>
        </h2>
      </div>
    </>
  );
};

export default GetRequestSetHeaders;
