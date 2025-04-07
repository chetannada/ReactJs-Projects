const CustomTooltip = (props) => {
  const { text, children, className = "left-1/2" } = props;

  return (
    <div className="relative flex items-center group">
      {children}
      <div
        className={`absolute bottom-full ${className} transform -translate-x-1/2 mb-3 hidden group-hover:block z-10`}
      >
        {/* Tooltip container */}
        <div className="bg-gray-800 text-white text-xs rounded py-2 px-3 relative max-w-sm break-words">
          {text}
          {/* Arrow pointer */}
          <div
            className={`absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CustomTooltip;
