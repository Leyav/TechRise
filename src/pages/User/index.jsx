import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { id } = useParams(); // Get user ID from route

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold mb-4">
            {id}
          </div>
          <h2 className="text-2xl font-semibold mb-1">User #{id}</h2>
          <p className="text-gray-600 mb-4">Welcome to your profile page!</p>
        </div>
        <div className="border-t pt-4 mt-4 text-sm text-gray-500 text-center">
          This is a sample user page.
        </div>
      </div>
    </div>
  );
};

export default UserPage;
