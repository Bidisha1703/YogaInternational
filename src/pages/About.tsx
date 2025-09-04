import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import {FaArrowRight} from "react-icons/fa";
export default function About() {
  return (
    <div className="font-sans text-gray-800 min-w-screen ">
        <Navbar/>
     {/*About hero section */}
     <div className="  flex flex-col md:flex-row items-center gap-8 ">
            <div className="relative">
        {/* Image */}
        <img
              src="/Group 35.png"
              alt="About"
              className="w-400"
             

            />

        {/* Button on top of image */}
        <div className="absolute top-3 right-3 bg-[#3D4E24] px-5 py-3  rounded-3xl  mr-313 mt-122 hover:border-2 hover:border-white transition-all duration-300 group z-10">
          <div className="flex flex-row space-x-2 justify-center items-center">
                        <span className="text-white font-semibold">Learn More</span>
                        <span>
                          <FaArrowRight className="text-white" />
                        </span>
                      </div>
        </div>
        </div>
            
            
          </div>
         <div className="mt-18 flex flex-col md:flex-row items-center gap-8 ">
            <div className="relative">
        {/* Image */}
        <img
              src="/Group 37.png"
              alt="About"
              className="w-400"
             

            />

        {/* Button on top of image */}
        <div className="absolute top-3 right-3 bg-[#3D4E24] px-5 py-3  rounded-3xl  mr-119 mt-145 hover:border-2 hover:border-white transition-all duration-300 group z-10">
          <p className="text-white font-semibold">Our Classes</p>
                                             
        </div>
        </div>
            
            
          </div>

          <div className="mt-2 mb-20 flex flex-col md:flex-row items-center gap-8 ">
            <div className="relative">
        {/* Image */}
        <img
              src="/Group 38.png"
              alt="About"
              className="w-400"
             

            />

        {/* Button on top of image */}
        <div className="absolute top-3 right-3 bg-[#3D4E24] w-40 px-5 py-3  rounded-3xl  mr-305 mt-145 hover:border-2 hover:border-white transition-all duration-300 group z-10">
          <p className="text-white font-semibold text-center">Our Classes</p>
                                             
        </div>
        </div>
            
            
          </div>
        <Footer/>

    </div>
  )
}