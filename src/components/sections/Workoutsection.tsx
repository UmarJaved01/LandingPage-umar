import Image from "next/image";
import Button from "../common/Button";

const Workoutsection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full">
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Make workout boredom a thing of the past
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur. Egestas mauris habitasse adipiscing massa parturient. Sagittis porttitor porta sed lacus
          </p>
          <div className="mt-6">
            <Button color="primary">Browse our workouts</Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/mobile-screens-earbuds.png" 
            alt="Mobile Screens and Earbuds"
            width={600} 
            height={400} 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Workoutsection;