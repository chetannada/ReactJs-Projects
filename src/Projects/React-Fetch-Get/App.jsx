import GetRequestAsyncAwait from "./GetRequestAsyncAwait";
import GetRequestErrorHandlingWithTryCatch from "./GetRequestErrorHandling";
import GetRequestSetHeaders from "./GetRequestSetHeaders";
import GetRequestHooks from "./GetRequestHooks";

const ReactFetchGetApp = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-auto p-4 bg-slate-700 border-1 rounded-lg text-center text-3xl text-white">
          React HTTP GET Requests for NPM API using Fetch in Different way
        </h1>
      </div>

      <div className="my-5 space-y-5">
        <GetRequestHooks />
        <GetRequestAsyncAwait />
        <GetRequestErrorHandlingWithTryCatch />
        <GetRequestSetHeaders />
      </div>
    </>
  );
};

export default ReactFetchGetApp;
