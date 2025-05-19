import React, { useState } from 'react';
import { categories } from './CategoryData';
import CategoryAccessModal from './CategoryAccessModal'
import SignInModal from '../../components/Layout/Header/Modals/SignInModal';
import SignUpModal from '../../components/Layout/Header/Modals/SignUpModal';

export default function CategoryPage() {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const isSignedIn = false;
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);

    const handleToggle = (category) => {
        setExpandedCategory(prev => prev === category ? null : category);
    };

    const handleAccess = (category, subcategory) => {
        if (!isSignedIn) {
            setModalOpen(true);
            return;
        }
        // else navigate or show data
        alert(`Accessing ${subcategory} under ${category}`);
    };

    return (
        <div className="container pt-24 px-6 max-w-screen-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 tracking-tight mb-4">
                🚀 Explore Categories
            </h1>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
                Find interview questions, answers, and resources for every tech stack. Click a category to get started.
            </p>
            <div className="space-y-4">
                {Object.entries(categories).map(([category, data]) => (
                    <div key={category} className="border rounded-xl">
                        <button
                            onClick={() => handleToggle(category)}
                            className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100"
                        >
                            {category}
                            <span>{expandedCategory === category ? "−" : "+"}</span>
                        </button>

                        {expandedCategory === category && (
                            <div className="px-6 pb-4 text-gray-600">
                                <p className="italic text-sm mb-3">{data.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    {data.items.map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => handleAccess(category, item)}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded hover:bg-blue-200"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <CategoryAccessModal open={modalOpen} onClose={() => setModalOpen(false)} openSignInModal={() => { setSignInModalOpen(true); setModalOpen(false); }} 
                openSignUpModal={() => { setSignUpModalOpen(true); setModalOpen(false); }}/>
            <SignInModal isOpen={signInModalOpen} onClose={() => setSignInModalOpen(false)} />
            <SignUpModal isOpen={signUpModalOpen} onClose={() => setSignUpModalOpen(false)} />
        </div>
    );
}
