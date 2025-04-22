import React from "react";
import Hero from "./components/Hero";

// const HeroSection = () => {
//   return (
//     <section id="home-section" className='bg-gray-50 dark:bg-gray-700'>
//       <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-600">
//           Welcome to Interview Crackers 💼
//         </h1>
//         <p className="text-lg text-gray-600 max-w-xl mx-auto">
//           Master the art of interviews with expert questions, winning answers, and smart tips.
//           Get started on your journey to crack every interview with confidence today.
//         </p>
//         <button className="mt-6 px-6 py-3 bg-primaryPurple text-white rounded-full font-semibold hover:bg-red-600">
//           Explore Recipes
//         </button>
//       </div>
//     </section>
//   );
// };

function Home() {


  return (
    <main>
      <Hero />  
    </main>
  );
}

export default Home;
