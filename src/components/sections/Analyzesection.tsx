import Image from "next/image";
import React from "react";

const Analyzesection= () => {
  return (
    <div className=" flex items-center mt-24 justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="text-left max-w-xs">
          <div className="flex justify-start mb-2">
            <Image
              src="/images/analyzeIcon.png" 
              alt="analyzeIcon"
              width={40}
              height={40}
            />
          </div>
          <h2 className="text-lg font-bold text-black-1000">Analyze: Visualize your results</h2>
          <p className="text-black-600">
            fitbro visualizes your workout results to quickly see how much more you can lift or how much time you’re spending in the gym.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/multiplephones.png" 
            alt="multiplephones"
            width={600} 
            height={400} 
          />
        </div>
        <div className="text-left max-w-xs">
          <div className="flex justify-start mb-2">
            <Image
              src="/images/analyzeIcon.png" 
              alt="analyzeIcon"
              width={40}
              height={40}
            />
          </div>
          <h2 className="text-lg font-bold text-black-1000">Analyze: Visualize your results</h2>
          <p className="text-black-600">
            fitbro visualizes your workout results to quickly see how much more you can lift or how much time you’re spending in the gym.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analyzesection;