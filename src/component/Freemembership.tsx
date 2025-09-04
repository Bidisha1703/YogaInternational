const Freemembership = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-none opacity-90"></div>
        <img 
          src="/image 3.png" 
          alt="Yoga beach background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 ">
        <div className="bg-[#F5C9B0] backdrop-blur-md rounded-2xl p-8 md:p-10 mb-10 md:mb-14 border border-none text-[#3D4E24] max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-left mb-8 md:mb-10">
            Free 30-Day <br/> Membership
          </h2>
          
          {/* Description */}
          <div>
            <p className="text-xl md:text-2xl leading-relaxed text-left font-light">
              At arcu neque aliquet laoreet. Id<br className="hidden sm:inline" />
              egestas mauris tincidunt ut nulla<br className="hidden sm:inline" />
              cras. Non eget sem curabitur vehicula<br className="hidden sm:inline" />
              diam integer. Magna tortor dignissim<br className="hidden sm:inline" />
              imperdiet pulvinar ante sed metus<br className="hidden sm:inline" />
              consequat in. Feugiat id ipsum lacinia<br className="hidden sm:inline" />
              nec nunc odio pellentesque.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-start gap-5 md:gap-6 mt-8 md:mt-10">
            <button className="bg-white text-[#3D4E24] hover:bg-[#3D4E24] hover:text-white py-4 px-8 md:py-5 md:px-10 rounded-full font-semibold text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book A Session
            </button>
            <button className="border-2 border-none text-[#3D4E24] hover:bg-white hover:text-[#3D4E24] py-4 px-8 md:py-5 md:px-10 rounded-full font-semibold text-xl md:text-2xl transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freemembership;