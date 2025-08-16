import { FiLogIn, FiLogOut } from "react-icons/fi";
import MenuItem from "../components/menu/MenuItem";

const Sidebar = ({ isLoggedIn, handleLogout, handleLoginClick }) => {
  return (
    <>
      <ul className="hidden lg:block fixed top-14 left-0 w-[40%] min-w-40 h-full bg-primary text-white ease-in-out duration-500">
        {isLoggedIn ? (
          <MenuItem
            icon={<FiLogOut />}
            label="Logout"
            onClick={handleLogout}
            hoverClass="hover:bg-secondary"
            pxClass="px-8"
          />
        ) : (
          <MenuItem
            icon={<FiLogIn />}
            label="Login"
            onClick={handleLoginClick}
            hoverClass="hover:bg-secondary"
            pxClass="px-8"
          />
        )}
      </ul>
    </>
  );
};

export default Sidebar;
