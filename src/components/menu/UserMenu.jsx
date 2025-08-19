// components/UserMenu.jsx
import { useState, useRef, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import MenuItem from "./MenuItem";

const UserMenu = ({ user, handleLogout }) => {
  const { userName, userAvatarUrl, githubUserName } = user;

  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <img
          src={userAvatarUrl}
          alt={userName}
          className="w-8 h-8 xmob:w-7 xmob:h-7 rounded-full border-2 border-white"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg z-50 overflow-hidden border border-gray-200">
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <img
                src={userAvatarUrl}
                alt={userName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">Chetan Nada</p>
                <p className="text-xs text-gray-500">@{githubUserName}</p>
              </div>
            </div>
          </div>

          <ul className="text-gray-700 text-sm">
            <MenuItem
              icon={<FiLogOut />}
              label="Logout"
              onClick={handleLogout}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
