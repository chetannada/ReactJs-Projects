import React, { useState, useEffect } from "react";
import { reqres_API } from "../config";

const PostRequestSetHeaders = () => {
  const [reqresData, setReqresData] = useState("");
  // POST request using fetch with set headers
  useEffect(() => {
    async function postData() {
      const reqOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer my-token",
          "My-Custom-Header": "foobar",
        },
        body: JSON.stringify({ first_name: "Chetan", last_name: "Nada" }),
      };
      const response = await fetch(reqres_API, reqOptions);
      const json = await response.json();
      setReqresData(json);
    }
    postData();
  }, []);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-128 sm:w-72 mob:w-56 p-4 bg-slate-200 border-4 rounded-xl mt-3 text-2xl">
          Post request using fetch with Set Headers
        </h1>
        <h2 className="max-sm h-auto w-128 sm:w-72 mob:w-56 p-4 border-4 text-2xl bg-slate-50 rounded-xl">
          UserId: {reqresData?.id}
        </h2>
      </div>
    </>
  );
};

export default PostRequestSetHeaders;
