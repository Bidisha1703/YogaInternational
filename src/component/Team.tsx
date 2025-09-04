import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const teamMembers = [
    {
      name: "Aarav Shanti",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Aarav Shanti",
      role: "CTO", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "K Kudo",
      role: "Lead Instructor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Kavya Pranaya",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Aarav S",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // Determine how many items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setItemsPerPage(1);
        } else if (window.innerWidth < 1024) {
          setItemsPerPage(2);
        } else if (window.innerWidth < 1280) {
          setItemsPerPage(3);
        } else {
          setItemsPerPage(4);
        }
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);
  const progressPercentage = ((currentIndex + 1) / totalPages) * 100;

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const getCurrentTeamData = () => {
    const start = currentIndex * itemsPerPage;
    return teamMembers.slice(start, start + itemsPerPage);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D4E24] mb-4">
            Our Great Team
          </h2>
          <p className="text-[#617345] text-lg mb-6">
            Sub Heading To Explain More
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-[#4E6130] font-medium">
              At arcu neque aliquet laoreet. Id egestas mauris tincidunt ut nulla cras. Non eget sem curabitur vehicula diam integer. Magna tortor dignissim imperdiet pulvinar ante sed metus consequat in. Feugiat id ipsum lacinia nec nunc odio pellentesque.
            </p>
          </div>
        </div>

        {/* Team Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Team Members Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10`}>
            {getCurrentTeamData().map((member, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ease-in-out ${
                  isTransitioning
                    ? "opacity-0 transform translate-x-4"
                    : "opacity-100 transform translate-x-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-[#3D4E24] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#617345]">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center">
            <div className="flex-1 max-w-md mr-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#3D4E24] transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0 || isTransitioning}
                className="p-2 rounded-full border border-[#3D4E24] text-[#3D4E24] hover:bg-[#3D4E24] hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous team members"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === totalPages - 1 || isTransitioning}
                className="p-2 rounded-full border border-[#3D4E24] text-[#3D4E24] hover:bg-[#3D4E24] hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next team members"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;