import { FiX, FiLogIn } from "react-icons/fi";
import { MdCancel } from "react-icons/md";

const LoginModal = ({ onClose, onLogin }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white rounded-lg shadow-2xl p-6 w-128 relative transition-all duration-300">
        {/* Cross Icon at Top Right */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-red-500 hover:scale-110 hover:shadow-md transition-all duration-200"
          aria-label="Close"
        >
          <FiX size={22} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Welcome back!
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          To personalize your experience and save your favorite projects, log in
          using your GitHub account.
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 hover:shadow-md rounded-md text-sm text-gray-800 transition-all duration-200"
          >
            <MdCancel size={18} />
            Cancel
          </button>
          <button
            onClick={onLogin}
            className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-green-700 hover:shadow-lg text-white rounded-md text-sm transition-all duration-200"
          >
            <FiLogIn size={18} />
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
