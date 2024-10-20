import PostRequestHooks from "./PostRequestHooks";
import PostRequestAsyncAwait from "./PostRequestAsyncAwait";
import PostRequestErrorHandlingWithTryCatch from "./PostRequestErrorHandling";
import PostRequestSetHeaders from "./PostRequestSetHeaders";

const ReactFetchPostApp = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-auto p-4 bg-slate-700 border-1 rounded-lg text-center text-3xl text-white">
          React HTTP POST Requests for Reqres API using Fetch in Different way
        </h1>
      </div>

      <div className="my-5 space-y-5">
        <PostRequestHooks />
        <PostRequestAsyncAwait />
        <PostRequestErrorHandlingWithTryCatch />
        <PostRequestSetHeaders />
      </div>
    </>
  );
};

export default ReactFetchPostApp;
