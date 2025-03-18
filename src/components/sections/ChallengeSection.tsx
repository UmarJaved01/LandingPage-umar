import Button from '../common/Button';
import Container from '../ui/Container';

const ChallengeSection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet training. Take challenges.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Egestas mauris habitasse adipiscing massa parturient. Sagittis porttitor porta sed lacus.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full">
              Download App
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full">
              Demo Training
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChallengeSection;
