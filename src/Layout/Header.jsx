const Header = () => {
  return (
    <>
      <header className="px-8 h-16 w-full bg-primary text-white">
        <nav className="flex justify-between items-center">
          <a href="/">
            <h1 className="text-3xl font-semibold">React.js Projects</h1>
          </a>
          <ul className="flex flex-row justify-end items-center text-lg">
            <a
              href="https://github.com/chetannada/ReactJs-Projects"
              target="_blank"
            >
              <li className="p-4">Github Repository</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
