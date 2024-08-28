import ReactFetchGetApp from "../Projects/React-Fetch-Get/App";
import ReactFetchPostApp from "../Projects/React-Fetch-Post/App";
import ReduxCounterApp from "../Projects/Redux-Counter-App/App";

const Body = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-2.5rem)] mob:min-h-[calc(100vh-2rem)] mx-8 mob:mx-4 pt-20 pb-4">
        <ReactFetchGetApp />
      </div>
    </>
  );
};

export default Body;
