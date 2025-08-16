import clsx from "clsx";

const MenuItem = ({
  icon,
  label,
  onClick,
  hoverClass = "hover:bg-gray-100",
  pxClass = "px-4",
}) => (
  <li
    className={clsx(
      "flex items-center py-3 cursor-pointer",
      hoverClass,
      pxClass
    )}
    onClick={onClick}
  >
    <span className="mr-3">{icon}</span>
    {label}
  </li>
);

export default MenuItem;
