import { Icon } from "@iconify/react";
import Signin from "../../../../pages/Auth/SignIn";

const SignInModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-white dark:bg-gray-600 bg-opacity-90 backdrop-blur-md"
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
          aria-label="Close Sign In Modal"
        >
          <Icon
            icon="tabler:currency-xrp"
            className="text-black hover:text-primary text-24 inline-block me-2"
          />
        </button>

        <Signin setShowSignin={onClose} />
      </div>
    </div>
  );
};

export default SignInModal;
