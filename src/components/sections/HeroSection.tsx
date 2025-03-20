import Image from "next/image";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section
      className="relative py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between rounded-[50px] min-h-[650px] md:h-[700px] mt-5"
      style={{
        backgroundImage: "url('/images/hero-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div className="flex flex-col text-center md:text-left md:w-3/5 space-y-6 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-black leading-tight">
          SMASHY<br />OUR<br />LIMITS
        </h1>
        <p className="text-lg sm:text-xl" style={{ color: "oklch(0.74 0.07 111.9)" }}>
          Plan to be bigger, stronger, and more athletic
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          <Button>Book a Demo</Button>
          <Button color="secondary">Contact Us</Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full flex justify-center md:w-auto md:absolute md:right-16 md:top-12 mt-10 md:mt-0">
        <Image
          src="/images/phone-image.png"
          width={300}
          height={640}
          alt="Mobile App Preview"
          className="w-[250px] sm:w-[300px] md:w-[400px] h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
