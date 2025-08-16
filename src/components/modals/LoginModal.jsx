import { FaGithub } from "react-icons/fa";
import CustomModal from "./CustomModal";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Welcome back!
      </h2>

      <p className="text-gray-600 mb-6">
        To personalize your experience and save your favorite projects, log in
        using your GitHub account.
      </p>

      <div className="flex justify-center">
        <button
          onClick={onLogin}
          className="flex items-center gap-2 text-sm px-5 py-2.5 text-white bg-gradient-to-br from-fuchsia-500 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg"
        >
          <FaGithub size={18} />
          Login with GitHub
        </button>
      </div>
    </CustomModal>
  );
};

export default LoginModal;
