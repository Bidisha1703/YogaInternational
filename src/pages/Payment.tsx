import FAQ from "@/component/FAQ";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Subscribtion from "@/component/Subscribtion";
import { PiFlowerLotusLight, PiHandEyeLight } from "react-icons/pi";
import { TfiEye } from "react-icons/tfi";
import { motion } from "framer-motion";


export default function Payment() {
    return(
        <div>
            <Navbar/>
            <div className="min-h-screen  relative overflow-hidden">
               
      {/* Heading */}
      <div 
        className="absolute inset-0 w-full h-135 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/Union.png")'
        }}
      >
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Yoga International
          </h1>
          <p className="text-xl md:text-2xl text-blue-500 font-medium mb-6">
            Special offer: 10% discount for you!
          </p>
          <div className="max-w-md mx-auto">
            <p className="text-gray-600 mb-2">
              Join today to lock in current prices before they rise on September 1st.
            </p>
            <p className="text-gray-600">
              You can <strong>start with a free trial</strong> and explore our classes risk-free.
            </p>
          </div>
        </div>
        </div>
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto ">
        {/* 6 Months Plan */}
        <div className="border-4 border-[#46B184]  rounded-4xl shadow-sm bg-white p-6 relative">
          <TfiEye  className="text-[#63A689] text-5xl mx-auto mb-3 mt-3" />
          <h2 className="text-[#63A689] text-4xl font-bold text-center">6 Months</h2>
          <p className="text-[#63A689] text-2xl font-bold text-center mt-4">Classic</p>
        <span className="flex flex-row space-x-2 justify-center items-center mt-3">
          <p className="mt-3 line-through text-gray-400">€15.00</p>
          <p className="text-2xl font-bold text-[#3D4E24]">€13.50</p>
          <p className="text-sm text-gray-600">/month*</p>
        </span>
          <ul className="mt-4 text-gray-700 text-sm space-y-1 text-left pl-16">
            <li className="text-[#3D4E24] text-sm font-bold">✓ €81.00* instead of €90.00*</li>
            <li>✓ Free 14 day trial</li>
            <li>✓ Billed 6 Months</li>
            <li>✓ Minimum term 6 months</li>
          </ul>

          <motion.button
      whileHover={{ scale: 1.35, borderWidth: 2, borderColor: "#86efac" }} // green-300
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="mt-8 ml-14 bg-[#46B184] w-[55px] hover:border-green-300 text-white font-medium py-2 px-4 rounded-full justify-center items-center"
    >
      Start Free Trial
    </motion.button>
          
        </div>

        {/* 1 Month Plan */}
        <div className="border-4 border-[#46B184]  rounded-4xl shadow-sm bg-white p-6 relative">
          <PiHandEyeLight className="text-[#63A689] text-5xl mx-auto mb-3 mt-5" />
          <h2 className="text-[#63A689] text-4xl font-bold text-center">1 Month</h2>
          <p className="text-[#63A689] text-2xl font-bold text-center mt-4">Classic</p>
        <span className="flex flex-row space-x-2 justify-center items-center mt-3">
          <p className="mt-3 line-through text-gray-400">€18.00</p>
          <p className="text-2xl font-bold text-[#3D4E24]">€16.20</p>
          <p className="text-sm text-gray-600">/month*</p>
        </span>
          <ul className="mt-4 text-gray-700 text-sm space-y-1 text-left pl-16">
            <li className="text-[#3D4E24] text-sm font-bold">✓ €16.20* instead of €18.00*</li>
            <li>✓ Free 14 day trial</li>
            <li>✓ Monthly cancellation</li>
          </ul>

         <motion.button
      whileHover={{ scale: 1.35, borderWidth: 2, borderColor: "#86efac" }} // green-300
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="mt-8 ml-14 bg-[#46B184] w-[55px] hover:border-green-300 text-white font-medium py-2 px-4 rounded-full justify-center items-center"
    >
      Start Free Trial
    </motion.button>
        </div>

        {/* 12 Months Plan (Highlighted) */}
        <div className="border-8 border-[#F5C9B0] rounded-4xl shadow-sm bg-white p-6 relative">
          <div className="absolute top-0 left-0 right-0 bg-[#F5C9B0] text-white font-medium py-1 rounded-t-xl text-center text-xl">
            Most Popular Plan
          </div>
          <PiFlowerLotusLight className="text-[#F5C9B0]  text-5xl mx-auto mb-1 mt-7" />
          <h2 className="text-[#f5bf9f] text-4xl font-bold text-center">12 Months</h2>
          <p className="text-[#f5bf9f] text-2xl font-bold text-center mt-2">Classic</p>
        <span className="flex flex-row space-x-2 justify-center items-center mt-3">
          <p className="mt-3 line-through text-gray-400">€13.33</p>
          <p className="text-2xl font-bold text-[#3D4E24]">€12.00</p>
          <p className="text-sm text-gray-600">/month*</p>
        </span>
          <ul  className="mt-4 text-gray-700 text-sm space-y-1 text-left pl-16">
            <li className="text-[#3D4E24] text-sm font-bold">✓ €144.00* instead of €160.00*</li>
            <li>✓ Free 14 day trial</li>
            <li>✓ Billed annually</li>
            <li>✓ Minimum term 1 year</li>
          </ul>

          <motion.button
      whileHover={{ scale: 1.35, borderWidth: 2, borderColor: "#86efac" }} // green-300
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="mt-8 ml-14 bg-[#46B184] w-[55px] hover:border-green-300 text-white font-medium py-2 px-4 rounded-full justify-center items-center"
    >
      Start Free Trial
    </motion.button>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-xl text-[#3D4E24] font-medium mt-10 max-w-8xl mx-auto text-center">
        Your subscription renews automatically at the regular rate. Discounts,
        if applicable, apply only to the first term. Cancel anytime before
        renewal. <br /> * Prices include VAT where applicable
      </p>
    </div>


    <div className="bg-[#fafafc] py-12 px-6 md:px-16 mt-10">
      {/* Key Benefits */}
      <h2 className="text-3xl font-bold text-center text-[#225557] mb-10">
        Key Benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
        {/* Left column */}
        <div className="flex gap-4">
          <img src="class.png" alt="" className="w-10 h-10" />
          <div>
            <h3 className="font-bold text-2xl text-[#225557]">
              Classes for every level and need
            </h3>
            <p className="text-gray-700 mt-2">
              Whether you’re a beginner or long-term practitioner, whether you
              just want to move your body or learn how it moves, you're welcome
              just as you are.
            </p>
          </div>
        </div>

        <div className="flex gap-4 ">
          <img src="reach.png" alt="" className="w-10 h-10" />
          <div>
            <h3 className="font-bold text-2xl text-[#225557]">Reach your yoga goals</h3>
            <p className="text-gray-700 mt-2">
              Learn the basics or make yoga a daily habit with 100+ guided
              programs and challenges.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <img src="style.png" alt="" className="w-10 h-10" />
          <div>
            <h3 className="font-bold text-2xl text-[#225557]">What's your style?</h3>
            <p className="text-gray-700 mt-2">
              Vinyasa, Hatha, Meditation, Yin, Pilates, Restorative, and more to
              explore.
            </p>
          </div>
        </div>

        <div className="flex gap-4 ">
          <img src="cancel.png" alt="" className="w-10 h-10" />
          <div>
            <h3 className="font-bold text-2xl text-[#225557]">Easy to cancel</h3>
            <p className="text-gray-700 mt-2">
              You can cancel your subscription at any time before the end of the
              term to avoid the next charge.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <img src="mobile.png" alt="" className="w-10 h-10" />
          <div>
            <h3 className="font-bold text-2xl text-[#225557]">Yoga in your pocket!</h3>
            <p className="text-gray-700 mb-3 mt-2">
              Whether at home or on the go, practice anytime, anywhere with our
              app. Download your favourite classes for offline use.
            </p>
            
          </div>
        </div>

        <div className="flex gap-4 ">
          <img src="new.png" alt="" className="w-10 h-10" />
          <div>
            <h3 className="font-bold text-2xl text-[#225557]">New classes every week</h3>
            <p className="text-gray-700 mt-2">
              New on-demand classes added every week to keep your practice fresh
              and flowing.
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-8">
              <img
                src="appstore.png"
                alt="App Store"
                className="h-10"
              />
              <img
                src="googleplay.png"
                alt="Google Play"
                className="h-10"
              />
            </div>
      </div>

      {/* Testimonials */}
      <h2 className="text-3xl font-bold text-center text-[#225557] mt-15 my-10">
        What our members say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className=" bg-[#f9f6f9] rounded-lg p-6 text-center">
          <p className="text-yellow-500 text-xl mb-3">★★★★★</p>
          <h3 className="font-bold text-lg text-teal-900">A HEALTHY CHOICE</h3>
          <p className="text-gray-700 my-3">
            “Subscribing to your platform has been the best choice for my
            mental, spiritual and physical health”
          </p>
          <p className="text-gray-500">Melissa</p>
        </div>

        <div className="bg-[#f9f6f9] rounded-lg p-6 text-center">
          <p className="text-yellow-500 text-xl mb-3">★★★★★</p>
          <h3 className="font-bold text-lg text-teal-900">
            WHAT REALLY MATTERS
          </h3>
          <p className="text-gray-700 my-3">
            “You make me feel okay that I wobble a bit and help me remember why
            I love yoga”
          </p>
          <p className="text-gray-500">Sam</p>
        </div>

        <div className="bg-[#f9f6f9] rounded-lg p-6 text-center">
          <p className="text-yellow-500 text-xl mb-3">★★★★★</p>
          <h3 className="font-bold text-lg text-teal-900">
            CAN'T STOP RECOMMENDING!
          </h3>
          <p className="text-gray-700 my-3">
            “I’ve lost count of the number of times I’ve recommended this online
            studio to others”
          </p>
          <p className="text-gray-500">Carole</p>
        </div>
      </div>
    </div>
        <FAQ/>
            <Subscribtion/>
            <Footer/>
        </div>
    );
}