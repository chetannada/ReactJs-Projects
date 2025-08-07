import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar";
import useWindowSize from "../hooks/useWindowSize";
import LoginModal from "./components/LoginModal";
import LoginButton from "./components/LoginButton";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const windowSize = useWindowSize();

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

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <header className="fixed top-0 z-50 px-8 mob:px-4 h-14 w-full bg-primary shadow-lg border-b-4 border-b-secondary text-white">
        <nav className="flex justify-between items-center h-full">
          {/* Logo */}
          <a href="/">
            <h1 className="text-2xl mob:text-xl font-semibold">
              <span className="text-purple-400">React.js</span> Projects
            </h1>
          </a>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            {/* Login/Logout Button */}
            <div className="block lg:hidden">
              <LoginButton
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
                handleLoginClick={handleLoginClick}
              />
            </div>

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
        </nav>
      </header>

      {/* Modal */}
      {showModal && (
        <LoginModal
          onClose={() => setShowModal(false)}
          onLogin={() => {
            setIsLoggedIn(true);
            setShowModal(false);
          }}
        />
      )}
    </>
  );
};
export default Header;
