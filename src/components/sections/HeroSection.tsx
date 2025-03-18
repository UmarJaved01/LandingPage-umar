import Image from 'next/image';
import Button from '../common/Button';
import Container from '../ui/Container';

const HeroSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <Container>
        <div className="relative">
          {/* Background Image with Rounded Top Corners */}
          <div className="absolute -left-16 -right-16 inset-y-0 -z-10 rounded-[40px] overflow-hidden">
            <Image
              src="/images/hero-background.png"
              alt="Hero Background"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text and Buttons */}
            <div className="md:w-1/2 space-y-6 z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                SMASHY<br />OUR LIMITS
              </h1>
              <p className="text-gray-600 text-lg">
                Plan to be bigger, stronger, and more athletic
              </p>
              <div className="flex space-x-4">
                <Button>Book a Demo</Button>
                <Button color="secondary">Contact Us</Button>
              </div>
            </div>
            {/* Separate div for Phone Image */}
            <div className="md:w-1/2 mt-8 md:mt-0 relative z-10">
              <div className="relative w-full h-[500px] flex justify-end">
                <Image
                  src="/images/phone-image.png"
                  alt="Phone image"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'right center' }}
                  className="absolute right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;