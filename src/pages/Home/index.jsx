import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Experts from "./components/Experts"
import Newsletter from "./components/Newsletter";
function Home() {


  return (
    <main>
      <Hero />  
      <Features/>
      <Experts/>
      <Newsletter/>
    </main>
  );
}


export default Home;
