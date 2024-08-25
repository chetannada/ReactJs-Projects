import PostRequestHooks from "./PostRequestHooks";
import PostRequestAsyncAwait from "./PostRequestAsyncAwait";
import PostRequestErrorHandlingWithTryCatch from "./PostRequestErrorHandling";
import PostRequestSetHeaders from "./PostRequestSetHeaders";

const ReactFetchPostApp = () => {
  return (
    <>
      <h1 className="text-center text-3xl p-5">
        React HTTP POST Requests for Reqres API using Fetch in Different way
      </h1>
      <main className="my-5 space-y-5">
        <PostRequestHooks />
        <PostRequestAsyncAwait />
        <PostRequestErrorHandlingWithTryCatch />
        <PostRequestSetHeaders />
      </main>
    </>
  );
};

export default ReactFetchPostApp;
