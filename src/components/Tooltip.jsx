const Tooltip = ({ text, children, left = "left-1/2", width = "max-w-sm" }) => (
  <div className="relative flex items-center">
    <div className="peer">{children}</div>

    <div
      className={`absolute bottom-full ${left} transform -translate-x-1/2 mb-3 invisible peer-hover:visible z-10`}
    >
      <div
        className={`bg-gray-800 text-white text-xs rounded py-2 px-3 relative break-words ${width}`}
      >
        {text}
        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
      </div>
    </div>
  </div>
);

export default Tooltip;
