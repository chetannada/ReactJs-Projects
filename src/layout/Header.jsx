import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar";
import useWindowSize from "../hooks/useWindowSize";
import axios from "axios";
import UserMenu from "../components/menu/UserMenu";
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../components/modal/LoginModal";
import { fetchUser, logoutUser } from "../store/reducers/authSlice";
import LogoutModal from "../components/modal/LogoutModal";
import strings from "../utils/strings";
import ThemeToggle from "../components/theme/ThemeToggle";

axios.defaults.withCredentials = true;

const Header = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn, isAuthReady } = useSelector(state => state.auth);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (windowSize.width > 1024) {
      setSidebarOpen(false);
    }
  }, [windowSize.width]);

  const handleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLoginClick = () => setShowLoginModal(true);

  const handleOnLogin = () => {
    const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

    window.location.href = `${API_BACKEND_URL}/auth/github`;
  };

  const handleLogoutClick = () => setShowLogoutModal(true);

  const handleOnLogout = () => {
    setShowLogoutModal(false);
    setSidebarOpen(false);
    dispatch(logoutUser());
  };

  // Render authentication UI based on login state
  const renderAuthUI = () => {
    if (!isAuthReady) return null;

    return (
      <>
        <ThemeToggle />

        {isLoggedIn && user ? (
          <UserMenu user={user} handleLogoutClick={handleLogoutClick} />
        ) : (
          <div className="block lg:hidden">
            <button
              onClick={handleLoginClick}
              className="flex flex-row gap-2 items-center text-white bg-gradient-to-br from-green-500 to-green-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2"
            >
              <FiLogIn size={18} />
              Login
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <header className="fixed top-0 z-50 px-8 mob:px-4 h-14 w-full bg-primary shadow-lg border-b-4 border-b-secondary text-white">
        <nav className="flex justify-between items-center h-full">
          <a href="/">
            <h1 className="text-2xl mob:text-xl xmob:text-base font-semibold">
              <span className="text-purple-400">React.js</span> Projects
            </h1>
          </a>

          <div className="flex items-center gap-4">
            {renderAuthUI()}

            <div
              onClick={handleSidebar}
              className="hidden lg:block p-4 -mr-4 text-3xl mob:text-2xl cursor-pointer"
            >
              {sidebarOpen ? <IoMdClose /> : <IoMdMenu />}
            </div>
          </div>

          {sidebarOpen && (
            <>
              <div className="fixed inset-0 top-14 bg-black bg-opacity-60 z-10" />
              <Sidebar
                isLoggedIn={isLoggedIn}
                handleLogoutClick={handleLogoutClick}
                handleLoginClick={handleLoginClick}
                sidebarOpen={sidebarOpen}
              />
            </>
          )}

          <LoginModal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            onLogin={handleOnLogin}
            title={strings.loginHeaderTitle}
            description={strings.loginHeaderDescription}
          />

          <LogoutModal
            isOpen={showLogoutModal}
            onClose={() => setShowLogoutModal(false)}
            onLogout={handleOnLogout}
            title={strings.logoutHeaderTitle}
            description={strings.logoutHeaderDescription}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
