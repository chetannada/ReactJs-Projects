import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar";
import useWindowSize from "../hooks/useWindowSize";
import LoginModal from "../components/modals/LoginModal";
import axios from "axios";
import UserMenu from "../components/menu/UserMenu";
import { FiLogIn } from "react-icons/fi";

axios.defaults.withCredentials = true;
const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

const Header = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAuthReady, setIsAuthReady] = useState(false);

  const windowSize = useWindowSize();

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${API_BACKEND_URL}/api/me`);
      setUser(res.data.user);
      setIsLoggedIn(true);
    } catch (err) {
      console.error("User fetch failed:", err);
      setUser(null);
      setIsLoggedIn(false);
    } finally {
      setIsAuthReady(true);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (windowSize.width > 1024) {
      setSidebarOpen(false);
    }
  }, [windowSize.width]);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${API_BACKEND_URL}/api/logout`);
      setUser(null);
      setIsLoggedIn(false);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const hanldeOnLogin = () => {
    window.location.href = `${API_BACKEND_URL}/auth/github`;
  };

  // Render authentication UI based on login state
  const renderAuthUI = () => {
    if (!isAuthReady) return null;

    if (isLoggedIn && user) {
      return <UserMenu user={user} handleLogout={handleLogout} />;
    }

    return (
      <div className="block lg:hidden">
        <button
          onClick={handleLoginClick}
          className="flex flex-row gap-2 items-center text-white bg-gradient-to-br from-green-500 to-green-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2"
        >
          <FiLogIn size={18} />
          Login
        </button>
      </div>
    );
  };

  return (
    <>
      <header className="fixed top-0 z-50 px-8 mob:px-4 h-14 w-full bg-primary shadow-lg border-b-4 border-b-secondary text-white">
        <nav className="flex justify-between items-center h-full">
          {/* Logo */}
          <a href="/">
            <h1 className="text-2xl mob:text-xl xmob:text-lg font-semibold">
              <span className="text-purple-400">React.js</span> Projects
            </h1>
          </a>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            {renderAuthUI()}

            {/* Hamburger Menu */}
            <div
              onClick={handleSidebar}
              className="hidden lg:block p-4 -mr-4 text-3xl mob:text-2xl cursor-pointer"
            >
              {sidebarOpen ? <IoMdClose /> : <IoMdMenu />}
            </div>
          </div>

          {/* Sidebar */}
          {sidebarOpen && (
            <Sidebar
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
              handleLoginClick={handleLoginClick}
            />
          )}

          {/* Login Modal */}
          <LoginModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onLogin={hanldeOnLogin}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
