import { FiX } from "react-icons/fi";

const LoginModal = ({ onClose, onLogin }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white rounded-lg shadow-2xl p-6 w-128 relative transition-all duration-300">
        {/* Cross Icon at Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-red-500 hover:shadow-md hover:bg-grey-100 transition-all duration-200 rounded-full p-2 flex items-center justify-center"
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
            className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg text-sm shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
          >
            Cancel
          </button>

          <button
            onClick={onLogin}
            className="text-sm px-5 py-2.5 text-white bg-gradient-to-br from-fuchsia-500 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg"
          >
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
