import React, { useEffect, useState } from "react";
import { reqres_API } from "../config";

const PostRequestAsyncAwait = () => {
  const [reqresData, setReqresData] = useState("");
  // POST request using fetch with async/await
  useEffect(() => {
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ first_name: "Chetan", last_name: "Nada" }),
    };
    async function postData() {
      await fetch(reqres_API, reqOptions)
        .then((response) => response.json())
        .then((json) => setReqresData(json));
    }
    postData();
  }, []);

  return (
    <>
    <div className="flex flex-col flex-wrap items-center justify-center text-center">
      <h1 className="h-auto w-128 sm:w-72 mob:w-56 p-4 bg-slate-200 border-4 rounded-xl mt-3 text-2xl">
        Post request using Fetch async/await
      </h1>
      <h2 className="max-sm h-auto w-128 sm:w-72 mob:w-56 p-4 border-4 text-2xl bg-slate-50 rounded-xl">
        UserId: {reqresData?.id}
      </h2>
    </div>
  </>
  );
};
export default PostRequestAsyncAwait;
