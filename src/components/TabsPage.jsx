const TabsPage = ({ activeTab, handleTabs }) => {
  return (
    <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
      <div className="flex gap-2 p-1 rounded-xl bg-gray-100 border border-purple-300">
        {["crafted", "curated"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabs(tab)}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border-2 ${
              activeTab === tab
                ? "bg-white text-purple-700 border-purple-700"
                : "bg-transparent text-gray-700 border-transparent"
            }`}
          >
            {tab === "crafted" ? "Crafted by Me" : "Curated by Others"}
          </button>
        ))}
      </div>

      <div className="flex flex-row flex-wrap gap-4 justify-end sm:justify-start items-center text-lg">
        <div className="bg-gray-100 p-2 rounded-md shadow-sm">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=chetannada&repo=ReactJs-Projects&type=star&count=true&size=large"
            width="120"
            height="30"
            title="GitHub"
          />
        </div>
        <div className="bg-gray-100 p-2 rounded-md shadow-sm">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=chetannada&type=follow&count=true&size=large"
            width="260"
            height="30"
            title="GitHub"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TabsPage;
