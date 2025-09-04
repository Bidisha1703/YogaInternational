import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";


export default function Footer() {
    return(
        <div>
            {/* Footer */}
       <footer className="bg-[#d5e6b7] text-[#2d3a20] py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 border-b border-[#b8cc9d] pb-6">
        
        {/* Logo + Social */}
        <div className=" mt-22">
          <div className="flex flex-row space-x-2 justify-center items-center mr-45">
            <span className="">
              <img src="/Group 28.png" alt="Logo" className="w-15 h-12" />
            </span>
            <span className="">
              <img src="/Group 3.png" alt="Logo name" className="pt-3 scale-150 ml-12" />
            </span>
          </div>
         
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-[#3D4E24] text-2xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Privacy & Policy</a></li>
            <li><a href="#" className="hover:underline">Our Facility</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-[#3D4E24] text-2xl mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <MapPin size={18} /> King Street, 5th Avenue, NewYork
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} /> 08168106501
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} /> yogifi@gmail.com
            </li>
          </ul>
           <div className="flex gap-4 mt-10 text-xl ">
            <FaFacebookF className="cursor-pointer hover:text-gray-700" />
            <FaInstagram className="cursor-pointer hover:text-gray-700" />
            <FaPinterestP className="cursor-pointer hover:text-gray-700" />
            <FaYoutube className="cursor-pointer hover:text-gray-700" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-700 mt-6">
        Copyright 2024 | All Rights Reserved
      </div>
    </footer>
        </div>
    );
}