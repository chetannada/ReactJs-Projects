import { useEffect, useState } from "react";

const GetRequestAsyncAwait = () => {
  const [npmReactData, setNpmReactData] = useState("");
  const API_NPM = import.meta.env.VITE_API_NPM;

  // GET request using fetch with async/await
  useEffect(() => {
    async function getData() {
      await fetch(API_NPM)
        .then((response) => response.json())
        .then((json) => setNpmReactData(json));
    }
    getData();
  }, [API_NPM]);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-128 sm:w-72 mob:w-56 p-4 bg-slate-200 border-4 rounded-xl mt-3 text-2xl">
          Get request using Fetch async/await
        </h1>
        <h2 className="max-sm h-auto w-128 sm:w-72 mob:w-56 p-4 border-4 text-2xl bg-slate-50 rounded-xl">
          Total React Packages in NPM: {npmReactData?.total}
        </h2>
      </div>
    </>
  );
};
export default GetRequestAsyncAwait;
