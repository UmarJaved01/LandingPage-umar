import Button from '../common/Button';
import Image from "next/image";

const ChallengeSection = () => {
  return (
    <section className="pt-60">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Meet training. Take challenges.
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Egestas mauris habitasse adipiscing massa parturient. Sagittis porttitor porta sed lacus.
        </p>
        <div className="flex justify-center gap-6">
          <Button>Download app</Button>
          <button className='cursor-pointer'>
            <Image src="/images/demotraining-button.png" alt="Demo training" width={120} height={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
