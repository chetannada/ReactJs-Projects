const Sidebar = () => {
  return (
    <>
      <ul className="hidden lg:block fixed top-16 mob:top-14 left-0 w-[60%] h-full bg-primary ease-in-out duration-500">
        <li className="p-4">
          {/* Github Repository Star Count */}
          <iframe
            className="ml-4 mob:ml-0 mt-1"
            src="https://ghbtns.com/github-btn.html?user=chetannada&repo=ReactJs-Projects&type=star&count=true&size=large"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
