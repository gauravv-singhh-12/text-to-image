import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-6">
      <div className=" mx-auto text-center bg-gray-900 shadow-2xl p-4 w-full ">
        
        <h2 className="text-4xl font-extrabold mb-6 ">
          About
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          <span className="font-semibold text-white">Text-to-Image Story Generator</span> 
          is an AI-powered platform that transforms your ideas into beautifully illustrated storybooks. 
          We designed it to make storytelling <span className="text-[#7C3AED] font-semibold">fun, easy, and accessible</span> for everyone.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-[#7C3AED] transition duration-300">
            <h3 className="text-2xl font-bold text-[#7C3AED] mb-4">AI-Powered Stories</h3>
            <p className="text-gray-300">
              Enter a short idea, and our AI creates a unique story just for you — from fairy tales to sci-fi adventures.
            </p>
          </div>

          
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-[#7C3AED] transition duration-300">
            <h3 className="text-2xl font-bold text-[#7C3AED] mb-4">Beautiful Illustrations</h3>
            <p className="text-gray-300">
              Each story is paired with AI-generated artwork that matches the tone, style, and imagination of your narrative.
            </p>
          </div>

    
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-[#7C3AED] transition duration-300">
            <h3 className="text-2xl font-bold text-[#7C3AED] mb-4">For Everyone</h3>
            <p className="text-gray-300">
              Whether you’re a child, teacher, or creative writer, our tool makes storytelling simple, interactive, and inspiring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
