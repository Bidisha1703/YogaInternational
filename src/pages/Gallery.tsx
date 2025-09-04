import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Subscribtion from "@/component/Subscribtion";
import { useState } from "react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  
  // Sample gallery images
  const galleryImages = [
    { id: 1, src: "/yoga-class-1.jpeg", alt: "Morning Yoga Class", category: "Classes" },
    { id: 2, src: "/yoga-pose-1.jpg", alt: "Advanced Warrior Pose", category: "Poses" },
    { id: 3, src: "/meditation-1.jpeg", alt: "Group Meditation Session", category: "Meditation" },
    { id: 4, src: "/workshop-1.jpeg", alt: "Yoga Workshop", category: "Workshops" },
    { id: 5, src: "/retreat-1.jpeg", alt: "Beach Yoga Retreat", category: "Retreats" },
    { id: 6, src: "/teacher-1.jpeg", alt: "Certified Yoga Instructor", category: "Teachers" },
    { id: 7, src: "/studio-1.jpeg", alt: "Modern Yoga Studio", category: "Studio" },
    { id: 8, src: "/event-1.jpeg", alt: "Annual Yoga Event", category: "Events" },
    { id: 9, src: "/community-1.jpeg", alt: "Yoga Community Gathering", category: "Community" },
  ];

  const categories = ["All", "Classes", "Poses", "Meditation", "Workshops", "Retreats", "Teachers", "Studio", "Events", "Community"];

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  // Determine which images to display based on showAll state
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 3);

  return (
    <div className="font-sans text-gray-800 min-w-screen">
      <Navbar />
      
      {/* Gallery Header Section */}
      <section className="bg-orange-100 py-12 px-4 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-medium text-[#3D4E24] text-center mb-8">
            GALLERY
          </h1>
          
         
          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false); // Reset to show only 3 images when filter changes
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeFilter === category
                    ? "bg-[#3D4E24] text-white"
                    : "bg-white text-[#3D4E24] hover:bg-[#3D4E24] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedImages.map((image) => (
              <div key={image.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-none bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                      View More
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[#728555] text-sm font-semibold">{image.category}</p>
                  <h3 className="text-[#3D4E24] font-semibold mt-2">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button - Only show if there are more than 3 images in the current filter */}
          {filteredImages.length > 3 && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="bg-[#3D4E24] text-white px-8 py-3 rounded-full hover:bg-[#2C3A1A] transition-colors duration-300 font-semibold"
              >
                {showAll ? 'Show Less' : `See More (${filteredImages.length})`}
              </button>
            </div>
          )}
        </div>
      </section>
      
      <Subscribtion />
      <Footer />
    </div>
  );
}