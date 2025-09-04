import { useState } from "react";
import { TbYoga, TbHanger } from "react-icons/tb";
import { PiFlowerLotusLight } from "react-icons/pi";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Subscribtion from "@/component/Subscribtion";
import Herosection from "@/component/Herosection";
import Team from "@/component/Team";
import Freemembership from "@/component/Freemembership";


export default function Home() {
  const [activeClass, setActiveClass] = useState("Beginners Yoga");
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const classes = [
    "Beginners Yoga",
    "Stretching",
    "Fly-Yoga",
    "Yin Yoga",
    "Flo Yoga",
  ];

  const services = [
    {
      title: "Get Started With Free Trial",
      desc: "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
      button: "Get Started Today",
    },
    {
      logo: <PiFlowerLotusLight className="w-12 h-12" />,
      title: "Spa Area",
      desc: "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
      button: "Learn More",
    },
    {
      logo: <TbHanger className="w-12 h-12" />,
      title: "Changing Rooms",
      desc: "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
      button: "Learn More",
    },
    {
      logo: <TbHanger className="w-12 h-12" />,
      title: "Equipment Area",
      desc: "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
      button: "Learn More",
    },
    {
      logo: <TbYoga className="w-12 h-12" />,
      title: "Free Lessons",
      desc: "Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.",
      button: "Learn More",
    },
  ];


  // Calculate items per page based on screen size
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 768) return 1; // Mobile: 1 card
      if (width < 1024) return 2; // Tablet: 2 cards
      return 3; // Desktop: 3 cards
    }
    return 4;
  };

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentServiceIndex((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentServiceIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const getCurrentServiceData = () => {
    const start = currentServiceIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return services.slice(start, end);
  };

  // Calculate progress percentage
  const progressPercentage = ((currentServiceIndex + 1) / totalPages) * 100;


  
  
  


  return (
    <div className="font-sans text-gray-800 min-w-screen ">
      <Navbar/>
      {/* Hero Section */}
      <Herosection/>
      {/* Services with Custom Carousel */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-5xl font-bold text-[#617345]">Our Services</h2>
        <p className="text-[#617345] mb-8">Sub Heading To Explain More</p>

        <div className="container mx-auto px-6">
          <div className="w-full max-w-5xl mx-auto">
            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {getCurrentServiceData().map((item, index) => (
                <div
                  key={`${currentServiceIndex}-${index}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isTransitioning
                      ? "opacity-0 transform translate-y-4"
                      : "opacity-100 transform translate-y-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="bg-[#D0DCBE] border-none shadow-lg hover:scale-105 transition-all duration-300 group hover:bg-[#617345]">
                    <CardContent className="flex flex-col items-center justify-center p-6 h-80">
                      {item.logo && (
                        <div className="mb-4 text-[#3D4E24] group-hover:text-white transition-colors duration-300">
                          {item.logo}
                        </div>
                      )}
                      <h3 className="font-bold text-lg text-[#3D4E24] group-hover:text-white transition-colors duration-300 mb-4 text-center">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#3D4E24] group-hover:text-white transition-colors duration-300 text-center mb-6 leading-relaxed">
                        {item.desc}
                      </p>
                      <button className="mt-auto px-6 py-2 border-2 border-[#3D4E24] bg-[#D0DCBE] group-hover:bg-white rounded-2xl transition-all duration-300">
                        <span className="text-[#3D4E24] transition-colors duration-300">
                          {item.button}
                        </span>
                      </button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Progress Bar and Navigation */}
            <div className="flex items-center w-full">
              <div className="flex-1 h-[6px] bg-gray-200 rounded-full overflow-hidden mr-3 md:mr-4">
                <div
                  className="h-full bg-[#617345] transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              <div className="flex gap-1 md:gap-2">
                <button
                  onClick={prevSlide}
                  disabled={isTransitioning || currentServiceIndex === 0}
                  className="p-2 rounded-full border border-[#617345] hover:border-[#3D4E24] hover:bg-[#3D4E24] hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4 text-[#617345] hover:text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={
                    isTransitioning || currentServiceIndex === totalPages - 1
                  }
                  className="p-2 rounded-full border border-[#617345] hover:border-[#3D4E24] hover:bg-[#3D4E24] hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="w-4 h-4 text-[#617345] hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Classes */}
<section className="py-12 bg-white text-center">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-5xl font-bold text-[#617345]">
      Latest Classes
    </h2>
    <p className="text-[#617345] mb-8">
      Sub Heading To Explain More
    </p>

    <div className="flex justify-center gap-4 md:gap-15 mt-8 md:mt-15 flex-wrap">
      {classes.map((cls) => (
        <button
          key={cls}
          onClick={() => setActiveClass(cls)}
          className={`px-3 py-2 md:px-4 md:py-2 scale-100 md:scale-130 rounded-2xl hover:border-2 text-xs md:text-sm transition ${
            activeClass === cls
              ? "bg-[#617345] text-white"
              : "bg-white text-[#617345] font-bold"
          }`}
        >
          {cls}
        </button>
      ))}
    </div>

    <div className="mt-8 p-4 md:p-8 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="relative">
        {/* Image */}
        <img
          src="/Group 32.png"
          alt="Yoga Class"
          className="rounded-lg mx-auto md:ml-35 max-w-full"
        />

        {/* Button on top of image */}
        <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-[#F5C9B0] px-3 py-2 md:px-5 md:py-3 rounded-3xl md:mr-228 mt-32 md:mt-60 hover:bg-[#3D4E24] transition-all duration-300 group z-10">
          <p className="text-[#4E6130] text-xs md:text-base font-semibold group-hover:text-white">Get A Free Trial</p>
        </div>
      </div>
    </div>
  </div>
</section>

     <Team/>  
      <Freemembership/>
    
      <Subscribtion/>
     <Footer/>
    </div>
  );
}