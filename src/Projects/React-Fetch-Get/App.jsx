import GetRequestAsyncAwait from "./GetRequestAsyncAwait";
import GetRequestErrorHandlingWithTryCatch from "./GetRequestErrorHandling";
import GetRequestSetHeaders from "./GetRequestSetHeaders";
import GetRequestHooks from "./GetRequestHooks";

const ReactFetchGetApp = () => {
  return (
    <>
      <h1 className="text-center text-3xl">
        React HTTP GET Requests for NPM API using Fetch in Different way
      </h1>
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
