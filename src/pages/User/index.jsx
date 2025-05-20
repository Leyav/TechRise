import React, { useState, useMemo } from 'react';
import { categories } from '../Categories/CategoryData';
import { Link } from "react-router-dom";

const ProfileDashboard = () => {
  const [viewType, setViewType] = useState('questions'); // 'questions' or 'answers'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');

  const [questions, setQuestions] = useState([
   
    { text: 'What is React?', category: 'Programming', subcategory: 'JavaScript' },
    { text: 'How to center a div?', category: 'Design', subcategory: 'CSS' },
    { text: 'What is a closure?', category: 'Programming', subcategory: 'JavaScript' },
  ]);

  const [answers, setAnswers] = useState([
    { text: 'React is a JS library for UI.', category: 'Programming', subcategory: 'JavaScript' },
    { text: 'Use flexbox to center div.', category: 'Design', subcategory: 'CSS' },
  ]);

  
  const subcategories = useMemo(() => {
    if (selectedCategory === 'All') return ['All'];
    return ['All', ...(categories[selectedCategory]?.items || [])];
  }, [selectedCategory]);


  // Filter questions or answers based on category and subcategory
  const filteredItems = useMemo(() => {
    const list = viewType === 'questions' ? questions : answers;
    return list.filter(item => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
      if (selectedSubCategory !== 'All' && item.subcategory !== selectedSubCategory) return false;
      return true;
    });
  }, [viewType, selectedCategory, selectedSubCategory, questions, answers]);


  return (
    <div className="container pt-24 px-6 max-w-screen-2xl mx-auto">
      <header className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-primaryPurple mb-2">Welcome to Your Profile</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Manage your questions, answers, and track your progress all in one place.
        </p>
      </header>

      <Link
        to="/add-question"
        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
      >
        Add a New Question
      </Link>
      {/* View Toggle */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setViewType('questions')}
          className={`px-5 py-2 rounded-md font-semibold transition ${viewType === 'questions' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'
            }`}
        >
          Latest Questions
        </button>
        <button
          onClick={() => setViewType('answers')}
          className={`px-5 py-2 rounded-md font-semibold transition ${viewType === 'answers' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'
            }`}
        >
          Latest Answers
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedSubCategory('All'); // reset subcategory when category changes
          }}
          className="border rounded-md px-4 py-2 text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="All">All Categories</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Subcategory Filter */}
        <select
          value={selectedSubCategory}
          onChange={(e) => setSelectedSubCategory(e.target.value)}
          className="border rounded-md px-4 py-2 text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={selectedCategory === 'All'}
        >
          {subcategories.map((subcat) => (
            <option key={subcat} value={subcat}>
              {subcat}
            </option>
          ))}
        </select>
      </div>

      {/* Results List */}
      <section>
        {filteredItems.length ? (
          <ul className="space-y-3">
            {filteredItems.map((item, i) => (
              <li
                key={i}
                className="border border-purple-200 rounded-md p-4 hover:shadow-md transition bg-white"
              >
                <p className="text-gray-900 font-medium">{item.text}</p>
                <small className="text-purple-600 font-semibold">
                  {item.category} {item.subcategory !== 'All' && `> ${item.subcategory}`}
                </small>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 italic">No {viewType} found for selected filters.</p>
        )}
      </section>
      {/* Categories */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primaryPurple text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, data]) => (
            <div
              key={category}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-primaryPurple mb-3">{category}</h3>
              <p className="text-gray-600 text-sm mb-4">{data.description}</p>
              <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                {data.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfileDashboard;
