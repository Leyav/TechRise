import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryAccessModal = ({ open, onClose, openSignInModal, openSignUpModal }) => {
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-6 text-center">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Access Restricted</h2>
        <p className="text-gray-600 mb-6">
          You can only access the data by signing in. If you're new, please sign up first.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => {openSignInModal();}}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign In
          </button>
          <button
            onClick={() => {openSignUpModal();}}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Sign Up
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default CategoryAccessModal;
