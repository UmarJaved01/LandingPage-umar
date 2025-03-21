import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="relative bg-cover bg-center text-white py-12 px-6 md:px-16"
            style={{ backgroundImage: "url('/images/footer.png')" }}>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="max-w-lg text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Quotient Is Available For All Devices
                    </h2>
                    <p className="text-gray-300 mb-6 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar nunc amet pretium pellentesque. Ornare in arcu elit quisque.
                    </p>
                    <div className="flex gap-4">
                        <button className="flex items-center border border-white px-4 py-2 rounded-md">
                            Google Play
                        </button>
                        <button className="flex items-center border border-white px-4 py-2 rounded-md">
                            Apple Store
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="max-w-6xl mx-auto mt-12 border-t border-gray-700 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
                <div>
                    <h3 className="font-bold text-white mb-2">Blackrise Themes Inc</h3>
                    <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur. Pulvinar nunc amet pretium pellentesque.</p>
                </div>
                <div>
                    <h3 className="font-bold text-white mb-2">Home</h3>
                    <p>Product</p>
                    <p>Pricing</p>
                    <p>Business</p>
                    <p>Enterprise</p>
                    <p>Customer Success</p>
                </div>
                <div>
                    <h3 className="font-bold text-white mb-2">About Us</h3>
                    <p>Company</p>
                    <p>Leadership</p>
                    <p>Careers</p>
                    <p>Diversity</p>
                    <p>Sitemap</p>
                </div>
                <div>
                    <h3 className="font-bold text-white mb-2">Resources</h3>
                    <p>App Guide</p>
                    <p>Forum</p>
                    <p>Support</p>
                    <p>App Directory</p>
                    <p>Events</p>
                </div>
            </div>

            {/* Social Icons and Terms Section */}
            <div className="max-w-6xl mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm gap-6 sm:gap-4">
                {/* Social Media Icons */}
                <div className="flex gap-4">
                    <FaFacebookF className="text-yellow-400 text-lg sm:text-xl cursor-pointer hover:text-yellow-300" />
                    <FaTwitter className="text-yellow-400 text-lg sm:text-xl cursor-pointer hover:text-yellow-300" />
                    <FaLinkedinIn className="text-yellow-400 text-lg sm:text-xl cursor-pointer hover:text-yellow-300" />
                    <FaInstagram className="text-yellow-400 text-lg sm:text-xl cursor-pointer hover:text-yellow-300" />
                </div>

                {/* Terms Section */}
                <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 text-center sm:text-right">
                    <span className="hover:underline cursor-pointer">Terms & Conditions</span>
                    <span className="hover:underline cursor-pointer">Privacy Policy</span>
                    <span className="hover:underline cursor-pointer">Cookies</span>
                </div>
            </div>

        </div>
    );
}

export default Footer;
