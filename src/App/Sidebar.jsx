import LoginButton from "./components/LoginButton";

const Sidebar = ({ isLoggedIn, handleLogout, handleLoginClick }) => {
  return (
    <>
      <ul className="hidden lg:block fixed top-14 left-0 w-[40%] min-w-40 h-full bg-primary ease-in-out duration-500">
        <li className="p-4 flex justify-center items-center">
          <LoginButton
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            handleLoginClick={handleLoginClick}
          />
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
