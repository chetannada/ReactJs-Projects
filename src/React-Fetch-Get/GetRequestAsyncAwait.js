import React, { useEffect, useState } from "react";
import { npm_API_React } from "../config";

const GetRequestAsyncAwait = () => {
  const [npmReactData, setNpmReactData] = useState("");
  // GET request using fetch Async Await
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch(npm_API_React)
      .then((response) => response.json())
      .then((json) => setNpmReactData(json));
  }

  return (
    <div className="flex flex-wrap items-center justify-center text-center">
      <div>
        <h1 className="box-content h-auto w-128 sm:w-72 mob:w-56 p-4 bg-slate-200 border-4 mt-3 text-2xl">
          Get request using Fetch Async Await
        </h1>
        <h2 className="box-content h-auto w-128 sm:w-72 mob:w-56 p-4 border-4 text-2xl bg-slate-50">
          Total React Packages in NPM: {npmReactData?.total}
        </h2>
      </div>
    </div>
  );
};
export default GetRequestAsyncAwait;
