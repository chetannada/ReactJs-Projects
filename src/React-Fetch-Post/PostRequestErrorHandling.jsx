import { useEffect, useState } from "react";

const PostRequestErrorHandlingWithTryCatch = () => {
  const [reqresData, setReqresData] = useState("");
  const [errorData, setErrorData] = useState("");

  // Post request using fetch with Error Handling using async/await and try/catch block
  useEffect(() => {
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ first_name: "Chetan", last_name: "Nada" }),
    };
    async function postData() {
      try {
        const response = await fetch(
          "https://reqres.in/invalid_url",
          reqOptions
        );

        if (!response.ok) {
          const error = response.status;
          throw new Error(error);
        } else {
          const data = await response.json();
          setReqresData(data);
        }
      } catch (error) {
        setErrorData(error.toString());
        console.error(error);
      }
    }
    postData();
  }, []);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-128 sm:w-72 mob:w-56 p-4 bg-slate-200 border-4 rounded-xl mt-3 text-2xl">
          Post request using Fetch with Error Handling using async/await and
          try/catch block
        </h1>
        <h2 className="max-sm h-auto w-128 sm:w-72 mob:w-56 p-4 border-4 text-2xl bg-slate-50 rounded-xl text-red-600">
          {reqresData && `UserId: ${reqresData?.id}`}
          {errorData}
        </h2>
      </div>
    </>
  );
};

export default PostRequestErrorHandlingWithTryCatch;
