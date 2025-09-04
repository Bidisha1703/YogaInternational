import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Subscribtion from "@/component/Subscribtion";
import { FaHeart, FaComment, FaShare, FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { useState } from "react";

export default function Social() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Sample social posts
  const socialPosts = [
    {
      id: 1,
      category: "Banded",
      title: "Bentry",
      description: "Discover the transformative power of banded yoga exercises that enhance flexibility and strength.",
      image: "/banded-yoga.jpg",
      likes: 243,
      comments: 56,
      shares: 32
    },
    {
      id: 2,
      category: "String",
      title: "Splendour",
      description: "Experience the splendour of string yoga with poses that challenge your balance and focus.",
      image: "/string-yoga.jpeg",
      likes: 187,
      comments: 42,
      shares: 28
    },
    {
      id: 3,
      category: "Pearly",
      title: "Accents",
      description: "Add pearly accents to your practice with these beautiful and graceful yoga sequences.",
      image: "/pearly-yoga.jpeg",
      likes: 321,
      comments: 78,
      shares: 45
    },
    {
      id: 4,
      category: "Banded",
      title: "Harmony",
      description: "Find harmony through banded movements that synchronize breath and motion.",
      image: "/banded-harmony.jpeg",
      likes: 156,
      comments: 34,
      shares: 21
    },
    {
      id: 5,
      category: "String",
      title: "Elegance",
      description: "Achieve elegance in your practice with string-assisted poses that flow like poetry.",
      image: "/string-elegance.jpeg",
      likes: 278,
      comments: 63,
      shares: 39
    },
    {
      id: 6,
      category: "Pearly",
      title: "Radiance",
      description: "Radiate positive energy with pearly sequences that illuminate your inner strength.",
      image: "/pearly-radiance.jpeg",
      likes: 198,
      comments: 47,
      shares: 31
    }
  ];

  const categories = ["All", "Banded", "String", "Pearly"];

  const filteredPosts = activeCategory === "All" 
    ? socialPosts 
    : socialPosts.filter(post => post.category === activeCategory);

  return (
    <div className="font-sans text-gray-800 min-w-screen">
      <Navbar />
      
      {/* Social Header Section */}
      <section className="bg-orange-100 py-12 px-4 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-medium text-[#3D4E24] text-center mb-8">
            SOCIAL
          </h1>
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="bg-[#3D4E24] text-white p-3 rounded-full hover:bg-[#2C3A1A] transition-colors duration-300">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="bg-[#3D4E24] text-white p-3 rounded-full hover:bg-[#2C3A1A] transition-colors duration-300">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="bg-[#3D4E24] text-white p-3 rounded-full hover:bg-[#2C3A1A] transition-colors duration-300">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="bg-[#3D4E24] text-white p-3 rounded-full hover:bg-[#2C3A1A] transition-colors duration-300">
              <FaPinterest className="text-xl" />
            </a>
          </div>
          
          
          {/* Category Filter */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  activeCategory === category
                    ? "bg-[#3b4a24] text-white"
                    : "bg-white text-[#3D4E24] hover:bg-[#3D4E24] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Social Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Post Image */}
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#541b5e] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#3D4E24] mb-2">
                    {post.title}
                  </h2>
                  <p className="text-[#4E6130] mb-4">
                    {post.description}
                  </p>
                  
                  {/* Social Engagement */}
                  <div className="flex justify-between items-center text-[#728555]">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FaHeart className="text-red-500" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaComment className="text-blue-500" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaShare className="text-green-500" />
                        <span className="text-sm">{post.shares}</span>
                      </div>
                    </div>
                    <button className="bg-[#d664a3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#c13b77] transition-colors duration-300">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-[#3D4E24] text-white px-8 py-3 rounded-full hover:bg-[#2C3A1A] transition-colors duration-300 font-semibold">
              See More Posts
            </button>
          </div>
        </div>
      </section>
      
      <Subscribtion />
      <Footer />
    </div>
  );
}