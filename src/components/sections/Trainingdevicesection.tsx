import Image from 'next/image';

const Trainingdevice = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        {/* Combined Mobile Image */}
        <Image 
          src="/images/2mobile.png" 
          alt="Mobile App UI" 
          width={600} 
          height={600} 
          className="rounded-lg"
        />

        {/* Watch Image */}
        <Image 
          src="/images/HandWatch.png" 
          alt="Smartwatch UI" 
          width={300} 
          height={300} 
          className="rounded-lg"
        />
      </div>

      <h2 className="text-3xl font-bold mb-4">Your Training. Any Device.</h2>
      <p className="text-gray-700 max-w-xl mb-6">
        Strong is available on iPhone, Android, and Apple Watch. Access your training from any device and never miss a workout. Privacy and permissions are fully under your control.
      </p>
      <p className="text-gray-700 max-w-xl mb-6">Export your data any time.</p>
      
      <div className="flex gap-4">
        <Image src="/images/applestore1.png" alt="Download on App Store" width={150} height={50} />
        <Image src="/images/Playstore1.png" alt="Get it on Google Play" width={150} height={50} />
      </div>
    </div>
  );
}

export default Trainingdevice;