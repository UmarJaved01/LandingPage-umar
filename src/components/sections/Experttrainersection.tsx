import Image from "next/image";
import Button from "../common/Button";

const ExpertTrainerSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1">
          <Image
            src="/images/experttrainersgirl.png"
            alt="Expert Trainer"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 bg-black text-white flex flex-col justify-center p-8">
          <h1 className="text-4xl font-bold leading-tight">
            Expert trainers guide you through every workout
          </h1>
          <p className="mt-4 text-lg">
            Our trainers give you techniques, tips, and encouragement for real results at any level.
          </p>
          <div className="mt-6">
            <Button color="primary">Meet our trainers</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertTrainerSection;
