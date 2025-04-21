import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-lightPurple to-white">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-600">
          Welcome to Chef’s Kitchen 🍽️
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Explore delicious recipes, cooking tips, and culinary inspiration. Get started with your kitchen journey today.
        </p>
        <button className="mt-6 px-6 py-3 bg-primaryPurple text-white rounded-full font-semibold hover:bg-red-600">
          Explore Recipes
        </button>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        {/* Add other sections here */}
      </main>

    </div>
  );
};

export default App;
