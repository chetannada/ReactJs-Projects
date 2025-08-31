import { FiLogOut } from "react-icons/fi";
import Modal from ".";

const LogoutModal = ({ isOpen, onClose, onLogout, title, description }) => {
  console.log(isOpen);
  console.log(title);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">{title}</h2>

      <p className="text-gray-600 mb-6">{description}</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={onLogout}
          className={`flex items-center gap-2 text-sm px-5 py-2.5 font-medium rounded-lg
    text-white bg-gradient-to-br from-blue-500 to-blue-800
    hover:bg-gradient-to-bl focus:ring-1 focus:outline-none`}
        >
          <FiLogOut size={18} />
          Confirm Logout
        </button>

        <button
          onClick={onClose}
          className="text-sm px-5 py-2.5 text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-1 focus:outline-none font-medium rounded-lg"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default LogoutModal;
