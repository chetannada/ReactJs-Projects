import { useState, useEffect } from "react";

const PostRequestHooks = (props) => {
  const { searchedUserName } = props;

  const [reqresData, setReqresData] = useState("");

  // Simple POST request with a JSON body using fetch
  useEffect(() => {
    const API_REQRES = import.meta.env.VITE_API_REQRES;
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: searchedUserName }),
    };
    fetch(API_REQRES + "api/users", reqOptions)
      .then((response) => response.json())
      .then((data) => setReqresData(data));
  }, [searchedUserName]);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 bg-slate-200 border-4 rounded-xl mt-3 text-2xl font-medium">
          Simple Post request using Fetch
        </h1>
        <h2 className="flex flex-row justify-center flex-wrap gap-2 max-sm h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 border-4 text-2xl bg-slate-50 rounded-xl">
          UserId for {searchedUserName} :{" "}
          <span className="text-red-800">{reqresData?.id}</span>
        </h2>
      </div>
    </>
  );
};

export default PostRequestHooks;
