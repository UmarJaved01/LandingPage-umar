import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-xl px-30 py-4 mt-3">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={70} height={40} />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-gray-600">
        <Link href="/about" className="hover:text-black">About us</Link>
        <Link href="/community" className="hover:text-black">Community</Link>
        <Link href="/privacy" className="hover:text-black">Privacy</Link>
      </div>

      {/* App Store Links */}
      <div className="flex space-x-3">
        <Link href="https://www.apple.com/app-store/">
          <Image src="/images/app-store.png" alt="App Store" width={130} height={40} />
        </Link>
        <Link href="https://play.google.com/store">
          <Image src="/images/play-store.png" alt="Play Store" width={130} height={40} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
