import React, { useEffect, useState } from "react";

const PostRequestErrorHandling = () => {
  const [reqresData, setReqresData] = useState("");
  const [errorData, setErrorData] = useState("");
  // Post request using fetch with Error Handling
  useEffect(() => {
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ first_name: "Chetan", last_name: "Nada" }),
    };
    async function postData() {
      await fetch("https://reqres.in/invalid_url", reqOptions)
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson && (await response.json());
          if (!response.ok) {
            const error = (data && data.message) || response.status;
            throw new Error(error);
          }
          setReqresData(data);
        })
        .catch((error) => {
          setErrorData(error.toString());
          console.error(error);
        });
    }
    postData();
  }, []);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-128 sm:w-72 mob:w-56 p-4 bg-slate-200 border-4 rounded-xl mt-3 text-2xl">
          Post request using Fetch with Error Handling
        </h1>
        <h2 className="max-sm h-auto w-128 sm:w-72 mob:w-56 p-4 border-4 text-2xl bg-slate-50 rounded-xl text-red-600">
          {reqresData}{errorData}
        </h2>
      </div>
    </>
  );
};

export default PostRequestErrorHandling;
