import { Icon } from "@iconify/react";
import SignUp from "../../../../pages/Auth/SignUp";

const SignUpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-dark_grey bg-opacity-90 backdrop-blur-md px-8 pt-10 pb-6 text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
          aria-label="Close Sign Up Modal"
        >
          <Icon
            icon="tabler:currency-xrp"
            className="text-white hover:text-primary text-24 inline-block me-2"
          />
        </button>

        <SignUp />
      </div>
    </div>
  );
};

export default SignUpModal;
