"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 mt-3 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={70} height={40} />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-gray-600">
        <Link href="/about" className="hover:text-black">About us</Link>
        <Link href="/community" className="hover:text-black">Community</Link>
        <Link href="/privacy" className="hover:text-black">Privacy</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute z-30 top-16 left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4 text-gray-600">
            <Link href="/about" className="hover:text-black" onClick={() => setIsOpen(false)}>About us</Link>
            <Link href="/community" className="hover:text-black" onClick={() => setIsOpen(false)}>Community</Link>
            <Link href="/privacy" className="hover:text-black" onClick={() => setIsOpen(false)}>Privacy</Link>
            
            {/* App Store Links for Mobile */}
            <div className="flex flex-col gap-2 space-x-3 mt-4">
              <Link href="https://www.apple.com/app-store/">
                <Image src="/images/app-store.png" alt="App Store" width={130} height={40} />
              </Link>
              <Link href="https://play.google.com/store">
                <Image src="/images/play-store.png" alt="Play Store" width={130} height={40} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* App Store Links (Desktop) */}
      <div className="hidden md:flex space-x-3">
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
