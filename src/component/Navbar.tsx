import { useState } from 'react';
import { AiOutlineGlobal } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaLinkedinIn, FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediaOpen, setIsMediaOpen] = useState(false); // dropdown toggle

    return (
        <div className="font-sans text-gray-800 min-w-screen">
            {/* Header */}
            <header className="bg-[#728555] text-white text-sm py-2 px-4 pl-1 w-full h-10 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left: Social Icons */}
                    <div className="flex gap-3 p-0.5 pl-6">
                        <TbBrandTwitterFilled className="text-white cursor-pointer hover:text-blue-400 w-4 h-4" />
                        <FaFacebook className="text-white cursor-pointer hover:text-blue-500 w-4 h-4" />
                        <SiInstagram className="text-white cursor-pointer hover:text-pink-600 w-4 h-4" />
                        <FaLinkedinIn className="text-white cursor-pointer hover:text-blue-600 w-4 h-4" />
                    </div>

                    {/* Center: Language */}
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300 pr-5">
                        <AiOutlineGlobal className="text-sm" />
                        <span>English</span>
                        <span className="text-xs">▼</span>
                    </div>

                    {/* Right: Sign In */}
                    <div className="hover:underline pr-5">Sign In</div>
                </div>
            </header>

            {/* Main Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto flex items-center justify-between py-4 px-6">
                    {/* Logo */}
                    <div className="flex flex-row space-x-2 justify-center items-center">
                        <img src="/Group 28.png" alt="Logo" className="w-10 h-10" />
                        <img src="/Group 3.png" alt="Logo name" className="pt-3" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6 text-sm pr-3 relative">
                        <Link to="/">
                            <span className="font-bold text-[#3D4E24] hover:underline">
                                Home
                            </span>
                        </Link>

                        {/* Media Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsMediaOpen(!isMediaOpen)}
                                className="font-bold text-[#3D4E24] hover:underline flex items-center"
                            >
                                Media <span className="text-xs ml-1">▼</span>
                            </button>

                            {isMediaOpen && (
                                <div className="absolute top-8 left-0 w-40 bg-white rounded-2xl shadow-lg overflow-hidden">
                                    <Link to="/events" className="block px-4 py-2  hover:bg-[#728555] hover:text-white">Events</Link>
                                    <Link to="/gallery" className="block px-4 py-2 hover:bg-[#728555] hover:text-white">Gallery</Link>
                                    <Link to="/social" className="block px-4 py-2 hover:bg-[#728555]  hover:text-white">Social</Link>
                                    <Link to="/blogs" className="block px-4 py-2 hover:bg-[#728555] hover:text-white">Blogs</Link>
                                </div>
                            )}
                        </div>

                        <span className="font-bold text-[#3D4E24] hover:underline">Our Facility</span>
                        <Link to="/about"><span className="font-bold text-[#3D4E24] hover:underline">About Us</span></Link>
                        <Link to="/contact"><span className="font-bold text-[#3D4E24] hover:underline">Contact</span></Link>
                        <Link to="/classes"><span className="font-bold text-[#3D4E24] hover:underline">Classes</span></Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#3D4E24] text-xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="container mx-auto px-6 pb-4 flex flex-col gap-4">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>
                            <span className="font-bold text-[#3D4E24] hover:underline block py-2">Home</span>
                        </Link>

                        {/* Mobile Media Dropdown */}
                        <div>
                            <button
                                onClick={() => setIsMediaOpen(!isMediaOpen)}
                                className="font-bold text-[#3D4E24] hover:underline block py-2 w-full text-left flex justify-between"
                            >
                                Media <span className="text-xs">▼</span>
                            </button>
                            {isMediaOpen && (
                                <div className="ml-4 mt-2 flex flex-col gap-2">
                                    <Link to="/events" className="text-sm hover:underline">Events</Link>
                                    <Link to="/gallery" className="text-sm hover:underline">Gallery</Link>
                                    <Link to="/social" className="text-sm hover:underline">Social</Link>
                                    <Link to="/blogs" className="text-sm hover:underline">Blogs</Link>
                                </div>
                            )}
                        </div>

                        <span className="font-bold text-[#3D4E24] hover:underline block py-2">Our Facility</span>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                            <span className="font-bold text-[#3D4E24] hover:underline block py-2">About Us</span>
                        </Link>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                            <span className="font-bold text-[#3D4E24] hover:underline block py-2">Contact</span>
                        </Link>
                        <Link to="/classes" onClick={() => setIsMenuOpen(false)}>
                            <span className="font-bold text-[#3D4E24] hover:underline block py-2">Classes</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
