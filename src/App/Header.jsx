import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar";
import useWindowSize from "../hooks/useWindowSize";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > 1024) {
      setSidebarOpen(false);
    }
  }, [windowSize.width]);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="fixed top-0 z-50 px-8 mob:px-4 h-14 mob:h-14 w-full mx-auto bg-primary shadow-lg border-b-4 border-b-secondary text-white">
        <nav className="flex flex-row justify-between items-center">
          {/* Project title-logo */}
          <a href="/" className="2xl:mt-3 lg:-mt-1">
            <h1 className="text-2xl mob:text-xl font-semibold">
              <span className="text-purple-400">React.js</span> Projects
            </h1>
          </a>

          {/* Hamburgfer Menu Icon */}
          <div
            onClick={handleSidebar}
            className="hidden lg:block p-4 -mr-4 text-3xl mob:text-2xl items-center cursor-pointer"
          >
            {sidebarOpen ? <IoMdClose /> : <IoMdMenu />}
          </div>

          {/* Sidebar Component */}
          {sidebarOpen && <Sidebar />}
        </nav>
      </header>
    </>
  );
};

export default Header;
