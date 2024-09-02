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
      <header className="fixed top-0 px-8 mob:px-4 h-16 mob:h-14 w-full mx-auto bg-primary shadow-lg border-b-4 border-b-secondary text-white">
        <nav className="flex flex-row justify-between items-center">
          {/* Project title-logo */}
          <a href="/">
            <h1 className="text-3xl mob:text-xl font-semibold">
              <span className="text-secondary">React.js</span> Projects
            </h1>
          </a>
          <div className="lg:hidden flex flex-row justify-end items-center text-lg">
            {/* Github Repository Star Count */}
            <iframe
              className="m-4"
              src="https://ghbtns.com/github-btn.html?user=chetannada&repo=ReactJs-Projects&type=star&count=true&size=large"
              width="120"
              height="30"
              title="GitHub"
            ></iframe>

            {/* Github Follower Count */}
            <iframe
              className="m-4 -mr-0.5"
              src="https://ghbtns.com/github-btn.html?user=chetannada&type=follow&count=true&size=large"
              width="260"
              height="30"
              title="GitHub"
            ></iframe>
          </div>

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
