import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/hero.png", // replace with your image path
    title: "Get results with yoga and fitness",
    subtitle: "Classes led by top instructors for your health journey.",
    button: "Learn More",
  },
  {
    image: "/hero2.jpeg",
    title: "Find peace by the sea",
    subtitle: "Experience yoga in nature's calm surroundings.",
    button: "Start Today",
  },
  {
    image: "/hero3.jpg",
    title: "Join our yoga community",
    subtitle: "Practice with like-minded people and grow together.",
    button: "Join Now",
  },
];

export default function Herosection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-advance slides (optional)
  useEffect(() => {
    if (!isMobile) { // Only auto-advance on desktop if desired
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [index, isMobile]);

  return (
    <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center md:justify-start"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background Image */}
          <img
            src={slides[index].image}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay for better text readability on mobile */}
          <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>

          {/* Content (Centered on mobile, left aligned on larger screens) */}
          <div className="relative z-10 text-[#3D4E24] max-w-3xl px-4 sm:px-6 md:px-12 lg:px-20 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
              {slides[index].title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-5 md:mb-6">
              {slides[index].subtitle}
            </p>
            <button className="bg-[#3D4E24] hover:bg-[#2F3D1C] text-white py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full shadow-md text-sm sm:text-base md:text-lg transition-colors">
              {slides[index].button}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows - Hidden on mobile if desired, or made larger for touch */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 sm:p-3 rounded-full text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft size={isMobile ? 20 : 24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 sm:p-3 rounded-full text-white"
        aria-label="Next slide"
      >
        <ChevronRight size={isMobile ? 20 : 24} />
      </button>

      {/* Dots - Larger and with more spacing for touch devices */}
      <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center space-x-2 sm:space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}