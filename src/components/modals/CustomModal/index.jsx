// components/ui/Modal.js
import { FiX } from "react-icons/fi";

const CustomModal = ({ isOpen, onClose, children, width = "w-128" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div
        className={`bg-white rounded-lg shadow-2xl p-6 relative transition-all duration-300 ${width}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-red-500 hover:shadow-md hover:bg-grey-100 transition-all duration-200 rounded-full p-2 flex items-center justify-center"
          aria-label="Close"
        >
          <FiX size={22} />
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
