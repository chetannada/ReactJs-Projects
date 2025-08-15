import { FiLogIn, FiLogOut } from "react-icons/fi";

const LoginButton = ({ isLoggedIn, handleLogout, handleLoginClick }) => {
  return (
    <>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-white bg-gradient-to-r from-red-500 to-orange-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2"
        >
          <FiLogOut size={18} />
          Logout
        </button>
      ) : (
        <button
          onClick={handleLoginClick}
          className="flex flex-row gap-2 items-center text-white bg-gradient-to-br from-green-500 to-green-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2"
        >
          <FiLogIn size={18} />
          Login
        </button>
      )}
    </>
  );
};

export default LoginButton;
