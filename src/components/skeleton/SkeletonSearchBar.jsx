const SkeletonSearchBar = () => {
  return (
    <div className="flex justify-center md:justify-start items-center mx-auto mb-8 w-full animate-pulse">
      <div className="flex items-center bg-white border border-purple-300 rounded-xl overflow-hidden w-full max-w-lg">
        <div className="px-4 py-6 w-full min-w-108 sm:min-w-72 xsm:min-w-52 bg-gray-300 rounded-l-xl" />
        <div className="px-4 py-6 dark:bg-gray-400 w-12 h-full flex items-center justify-center rounded-r-xl" />
      </div>
    </div>
  );
};

export default SkeletonSearchBar;
