import { useLocation } from "react-router-dom";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BodyLayout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <main className="min-h-[calc(100vh-2.5rem)] mob:min-h-[calc(100vh-2rem)] mx-8 mob:mx-4 pt-24 mob:pt-20 pb-8">
        {location.pathname.length > 1 && (
          <>
            <div className="flex justify-start items-center -mt-4 pb-4 mob:pb-4">
              <Link
                to={"/"}
                className="flex flex-row gap-1 justify-center items-center p-1 text-red-800 hover:text-sky-800 hover:font-medium"
              >
                <FaAnglesLeft /> Go Back
              </Link>
            </div>
          </>
        )}

        <div className="">{children}</div>
      </main>
    </>
  );
};

export default BodyLayout;
