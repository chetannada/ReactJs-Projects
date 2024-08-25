import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header className="px-8 h-16 w-full mx-auto bg-primary text-white">
        <nav className="flex flex-row justify-between items-center">
          <a href="/">
            <h1 className="text-3xl font-semibold">React.js Projects</h1>
          </a>
          <div className="lg:hidden flex flex-row justify-end items-center text-lg">
            <iframe
              className="m-4 -mr-44"
              src="https://ghbtns.com/github-btn.html?user=chetannada&repo=ReactJs-Projects&type=star&count=true&size=large"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>

            <iframe
              className="m-4 -mr-8"
              src="https://ghbtns.com/github-btn.html?user=chetannada&type=follow&count=true&size=large"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
          </div>

          <div className="hidden lg:flex p-4 text-3xl items-center cursor-pointer">
            <IoMdMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
