import React, { useState } from 'react';
import { categories } from '../../Categories/CategoryData';
// import { CheckCircleIcon } from '@heroicons/react/24/solid';

function AddQuestionPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const data = {
      category: selectedCategory,
      subcategory: selectedSubcategory,
      question,
      answer,
    };
    console.log('Submitted:', data);
    setSubmitted(true);

    // Clear form after submission
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container pt-24 px-6 max-w-screen-2xl mx-auto">
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-purple-100">
        <h2 className="text-4xl font-extrabold text-purple-700 text-center mb-8">📝 Add New Question</h2>

        {/* Success Alert */}
        {submitted && (
          <div className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 transition">
            {/* <CheckCircleIcon className="h-5 w-5 mr-2" /> */}
            <p>Question submitted successfully!</p>
          </div>
        )}

        {/* Category Dropdown */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">📁 Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubcategory('');
              setQuestion('');
              setAnswer('');
            }}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">-- Select Category --</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Dropdown */}
        {selectedCategory && (
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">📂 Subcategory</label>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">-- Select Subcategory --</option>
              {categories[selectedCategory].items.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Question & Answer Fields */}
        {selectedSubcategory && (
          <>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">❓ Question</label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows="3"
                placeholder="Type your question here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">💡 Answer (Optional)</label>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows="2"
                placeholder="Type answer here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300 ease-in-out"
              >
                🚀 Submit Question
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AddQuestionPage;
