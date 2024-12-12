import { useState } from 'react';
import DemoForm from './DemoForm';
import video1 from "../assets/video1.mp4";
import V from "../assets/V.mp4";

const HeroSection = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  const handleDemoClick = () => {
    setShowDemoForm(true);
  };

  const handleCloseForm = () => {
    setShowDemoForm(false);
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Gérez facilement vos prestataires avec des insights basés
        <span className="bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text">
          {" "}sur
        </span>
        <span className="bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text">
          {" "}l'IA
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-white-500 max-w-4xl">
        Optimisez vos opérations, suivez les budgets et faites des prévisions précises avec notre solution

      </p>
      <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text block mt-10">
         SaaS.
      </span>

      <div className="flex justify-center my-10">
        <button
          onClick={handleDemoClick}
          className="bg-gradient-to-r from-cyan-500 to-blue-800 py-3 px-6 rounded-md"
        >
          Start for free
        </button>
        <a href="#" className="py-3 px-4 mx-3 rounded-md-border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
          <source src={V} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      
      {showDemoForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <DemoForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
