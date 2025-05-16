import React, { useState } from 'react';
import { categories } from './CategoryData';
import CategoryAccessModal from './CategoryAccessModal';

export default function CategoryPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

  const handleAccess = (category, subcategory) => {
    if (!isSignedIn) {
      setModalOpen(true);
      return;
    }
    // else navigate or show data
    alert(`Accessing ${subcategory} under ${category}`);
  };

  return (
     <div className="pt-32 px-4 pb-12 max-w-5xl mx-auto">
         <CategoryAccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {!isSignedIn && (
        <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded text-center">
          Please sign in to access category details.
        </div>
      )}

      {/* <button
        onClick={() => setIsSignedIn(!isSignedIn)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {isSignedIn ? 'Sign Out' : 'Sign In'}
      </button> */}

      <div className="space-y-6">
        {Object.entries(categories).map(([category, data]) => (
          <div key={category} className="border rounded p-4 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">{category}</h2>
             <p className="mb-4 text-gray-600 italic">{data.description}</p>
            <ul className="list-disc list-inside space-y-1">
              {data.items.map((sub) => (
                <li key={sub}>
                  <button
                    onClick={() => handleAccess(category, sub)}
                    className="text-blue-600 hover:underline focus:outline-none"
                  >
                    {sub}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
