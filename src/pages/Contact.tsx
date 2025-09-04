import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Subscribtion from "@/component/Subscribtion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Contact() {
  return (
    <div className="font-sans text-gray-800 min-w-screen">
        <Navbar/>
        {/* Contact section */}
        <div className="p-4 md:p-12 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-7xl">
            {/* Mobile layout - text and button above image */}
            <div className="flex flex-col items-center md:hidden">
              <div className="w-full text-center mb-6">
                <h2 className="text-2xl font-bold text-black mb-4">
                  Want To Know More?<br/>Reach Out Us!
                </h2>
                
                <div className="bg-[#3D4E24] px-5 py-3 rounded-3xl hover:border-2 hover:border-white transition-all duration-300 inline-block">
                  <Dialog>
                    <DialogTrigger className="text-white text-lg">Contact Us</DialogTrigger>
                    <DialogContent className="bg-white rounded-4xl border-none shadow w-11/12 md:w-130 h-auto max-h-screen overflow-y-auto p-4 md:p-6">
                      <DialogHeader>
                        <DialogTitle className="text-[#3D4E24] font-bold text-xl md:text-4xl p-4 md:p-10">
                          Get In Touch
                          <form className="space-y-4 pt-4 md:pt-12">
                            <input
                              type="text"
                              placeholder="Full Name...."
                              className="w-full px-4 py-3 rounded-full bg-[#D5F0AC] focus:outline-none text-sm"
                            />
                            <input
                              type="text"
                              placeholder="Phone no...."
                              className="w-full mt-3 md:mt-5 px-4 py-3 rounded-full bg-[#D5F0AC] focus:outline-none text-sm"
                            />
                            <input
                              type="email"
                              placeholder="Email...."
                              className="w-full mt-3 md:mt-5 px-4 py-3 rounded-full bg-[#D5F0AC] focus:outline-none text-sm"
                            />
                            <button
                              type="submit"
                              className="w-full mt-4 md:mt-6 py-3 bg-[#3D4E24] text-base md:text-2xl text-center text-white font-semibold rounded-full shadow-md hover:border-2 hover:border-white"
                            >
                              Submit
                            </button>
                          </form>
                        </DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <div className="w-full max-w-md">
                <img
                  src="/Group 39.png"
                  alt="About"
                  className="w-full"
                />
              </div>
            </div>

            {/* Desktop layout - matches your original design */}
            <div className="hidden lg:flex relative max-w-[1440px] flex-col items-start w-full ">
              {/* Image with text overlay */}
              <div className="relative w-full max-w-md mx-auto md:max-w-full">
                <img
                  src="/Group 39.png"
                  alt="About"
                  className="w-full md:pl-140 pt-4 md:pt-10"
                />
                
                {/* Text overlay for "Want to know more" */}
                <div className="absolute top-6 left-4 md:top-20 md:left-12 text-left max-w-xs md:max-w-md text-xl md:text-4xl font-bold text-black">
                 Want To Know More?<br/>Reach Out Us!
                </div>
              </div>
          
              {/* Contact Us button positioned with proper spacing under the text */}
              <div className="absolute top-28 left-4 md:top-48 md:left-12 bg-[#3D4E24] px-4 py-2 md:px-5 md:py-3 rounded-3xl hover:border-2 hover:border-white transition-all duration-300 group z-10">
                <div className="flex flex-row space-x-2 justify-center items-center">
                  <Dialog>
                    <DialogTrigger className="text-white text-sm md:text-lg">Contact Us</DialogTrigger>
                    <DialogContent className="bg-white rounded-4xl border-none shadow w-11/12 md:w-130 h-auto max-h-screen overflow-y-auto p-4 md:p-6">
                      <DialogHeader>
                        <DialogTitle className="text-[#3D4E24] font-bold text-xl md:text-4xl p-4 md:p-10">
                          Get In Touch
                          <form className="space-y-4 pt-4 md:pt-12">
                            <input
                              type="text"
                              placeholder="Full Name...."
                              className="w-full px-4 py-3 rounded-full bg-[#D5F0AC] focus:outline-none text-sm"
                            />
                            <input
                              type="text"
                              placeholder="Phone no...."
                              className="w-full mt-3 md:mt-5 px-4 py-3 rounded-full bg-[#D5F0AC] focus:outline-none text-sm"
                            />
                            <input
                              type="email"
                              placeholder="Email...."
                              className="w-full mt-3 md:mt-5 px-4 py-3 rounded-full bg-[#D5F0AC] focus:outline-none text-sm"
                            />
                            <button
                              type="submit"
                              className="w-full mt-4 md:mt-6 py-3 bg-[#3D4E24] text-base md:text-2xl text-center text-white font-semibold rounded-full shadow-md hover:border-2 hover:border-white"
                            >
                              Submit
                            </button>
                          </form>
                        </DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
                  
        <Subscribtion/>
        <Footer/>
    </div>
  )
}