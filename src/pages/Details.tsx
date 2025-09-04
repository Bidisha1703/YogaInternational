import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Subscribtion from "@/component/Subscribtion";
import { IoTimeOutline } from "react-icons/io5";
import { FaChalkboardTeacher, FaFacebook, FaHeart, FaInstagram, FaPinterest, FaRegCommentDots } from "react-icons/fa";
import { GiLevelEndFlag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Details() {
    return(
        <div>
            <Navbar/>
            
            <div className="bg-green-50 min-h-screen px-4 md:px-12 py-8">
                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-medium text-[#3D4E24] mt-8 mb-6 md:mb-9">
                    Strength snack: 20 minutes to wake up your power
                </h2>

                {/* Top section */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {/* Left side: Video + details */}
                    <div className="md:col-span-2">
                        <div className="relative rounded-xl overflow-hidden">
                            <img
                                src="/image 7.png"
                                alt="Yoga Class"
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay Buttons */}
                            <div className="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row items-center justify-between gap-3 bg-orange-300 rounded-b-3xl p-3 md:p-4">
                                <div className="bg-none !text-white px-2 md:px-4 py-1 md:py-2 rounded-md text-xs md:text-sm ml-0 md:ml-9 w-full sm:w-fit text-center sm:text-left font-semibold hover:underline">
                                    Start your 14-day free trial or subscribe to enjoy full access
                                </div>
                                <Link to="/payment">
                                    <div className="bg-white text-[#3D4E24] px-4 py-2 rounded-full text-sm shadow font-semibold hover:bg-[#3D4E24] hover:text-white">
                                        Start Free Trial
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="bg-none py-4 md:py-6 px-2 md:px-4">
                            {/* Top Row: Favourite, Comments, Socials */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-10 mb-4 md:mb-6 text-[#3D4E24] border-t border-b border-[#626B54] h-auto md:h-17 py-3">
                                <div className="flex flex-col items-center text-sm p-2 md:p-1 ml-0 md:ml-13 ">
                                    <FaHeart className="text-pink-500 text-xl mb-1" />
                                    Favourite
                                </div>
                                <div className="flex flex-col items-center text-sm p-2 md:p-1 ml-0 md:ml-25">
                                    <FaRegCommentDots className="text-gray-600 text-xl mb-1" />
                                    Comments
                                </div>
                                <div className="flex gap-10 md:gap-6 text-xl md:text-2xl p-2 md:p-2 ml-0 md:ml-25">
                                    <FaFacebook className="cursor-pointer text-blue-600" />
                                    <FaInstagram className="cursor-pointer text-pink-500 ml-25" />
                                    <FaPinterest className="cursor-pointer text-red-600 ml-25" />
                                </div>
                            </div>

                            {/* Bottom Row: Duration, Level, Teacher, Style */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-green-900 text-sm">
                                <div className="flex items-center gap-2">
                                    <IoTimeOutline className="text-lg" />
                                    <span>
                                        <strong>Duration :</strong> 20 min
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <GiLevelEndFlag className="text-lg" />
                                    <span>
                                        <strong>Level :</strong> For All
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaChalkboardTeacher className="text-lg" />
                                    <span>
                                        <strong>Teacher :</strong> Esther Ekhart
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <GrYoga className="text-lg" />
                                    <span>
                                        <strong>Style :</strong> Mixed Movement
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Teacher info */}
                    <div className="bg-white rounded-xl shadow-md p-6 md:p-15 relative">
                        <p className="text-[#3D4E24] text-sm mb-4 pt-8 md:pt-14">
                            This 20-minute strength snack is the perfect way to energize and strengthen your body in a short amount of time. Blending yoga-inspired movement with functional strength work, you move through a grounding warm-up, and dynamic circuits for both lower and upper body. The pace is steady and mindful — no rushing, just you and your breath. Expect to feel stronger, more centered, and fully alive.
                        </p>

                        <h4 className="font-bold text-[#3D4E24] mb-3 pt-8 md:pt-14 pl-0 md:pl-4 text-xl md:text-2xl">Teachers:</h4>
                        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 pt-4 md:pt-7">
                            <img
                                src="/Teacher.png"
                                alt="Teacher"
                                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                            />
                            <div className="text-center sm:text-left">
                                <p className="font-bold text-[#3D4E24]">Esther Ekhart</p>
                                <p className="text-xs text-gray-600 pt-2 md:pt-5">
                                    Yoga teacher, speaker & trainer. Specialized in mindfulness, strength and grounding.
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-600 text-sm hover:underline mt-1 inline-block pt-1 md:pt-2"
                                >
                                    Teacher's Profile →
                                </a>
                            </div>
                        </div>

                        {/* Quote Icon */}
                        <div className="absolute top-0 right-2 md:right-4">
                            <img src="/image 8.png" alt="" className="w-10 h-10 md:w-auto md:h-auto" />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Comments Section */}
            <div className="bg-none min-h-screen px-4 md:px-12 py-8">
                <div className="mt-6 md:mt-9">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
                        <h3 className="text-3xl md:text-4xl font-medium text-[#728555] mb-4 md:mb-0">Comments</h3>
                        <a href="#" className="text-lg md:text-xl font-medium text-[#728555] hover:underline">
                            Log in to post a comment
                        </a>
                    </div>

                    {/* Comment Cards */}
                    <div className="space-y-4">
                        {[1, 2, 3].map((c) => (
                            <div
                                key={c}
                                className="bg-[#E9F8D4] p-4 rounded-lg text-[#3D4E24]"
                            >
                                <p className="font-semibold">
                                    Annie <span className="text-sm font-normal ml-2">10.08.2025</span>
                                </p>
                                <p className="text-sm mt-2">
                                    Hi Esther, a very good if a bit challenging for the older knees, but enjoyed none the less. Just what we needed, thank you!
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Quote icon at bottom */}
                    <div className="text-green-200 text-4xl md:text-6xl font-serif mt-6 text-center md:text-left">
                        <img src="/image 9.png" alt="" className="w-12 h-12 md:w-auto md:h-auto mx-auto md:mx-0" />
                    </div>
                </div>
            </div>
            
            <Subscribtion/>
            <Footer/>
        </div>
    )
}