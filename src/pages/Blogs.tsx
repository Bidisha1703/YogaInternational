import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Subscribtion from "@/component/Subscribtion";
import { FaArrowRight, FaCalendar, FaUser } from "react-icons/fa";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "The Journey of Mindfulness",
      excerpt: "From a young age, I was always captivated by the transformative power of yoga and mindfulness. I spent many childhood mornings watching my mother practice her asanas, fascinated by the grace and strength she embodied.",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Diagrams of Movement",
      excerpt: "As our yoga community begins to grow, I hope to revolutionise traditional practices by infusing modern techniques that make mindfulness a daily celebration for everyone.",
      date: "March 12, 2024",
      author: "Michael Chen",
      readTime: "7 min read",
      points: [
        "Modern yoga techniques for daily practice",
        "Blending movement, meditation, and meaning",
        "Why yoga captures hearts and minds in modern society"
      ]
    },
    {
      id: 3,
      title: "Breathwork Fundamentals",
      excerpt: "Discover the ancient art of pranayama and how conscious breathing can transform your practice and daily life. Learn techniques that have been passed down through generations.",
      date: "March 8, 2024",
      author: "Priya Sharma",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="font-sans text-gray-800 min-w-screen">
      <Navbar />
      
      {/* Blogs Header Section */}
      <section className="bg-orange-100 py-12 px-4 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-medium text-[#3D4E24] text-center mb-8">
            BLOGS
          </h1>
          
          {/* Blog Posts Grid */}
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl p-6 md:p-8">
                {/* Post Header */}
                <div className="flex flex-wrap gap-4 text-sm text-[#728555] mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[#3D4E24]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-[#3D4E24]" />
                    <span>{post.author}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                {/* Post Title */}
                <h2 className="text-2xl font-semibold text-[#3D4E24] mb-4">
                  {post.title}
                </h2>
                
                {/* Post Content */}
                <p className="text-[#4E6130] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                {/* Points List (if exists) */}
                {post.points && (
                  <div className="space-y-3 mb-6">
                    {post.points.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded border-2 border-[#3D4E24] mt-1 flex-shrink-0"></div>
                        <p className="text-[#4E6130]">{point}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Read More Button */}
                <button className="bg-[#3D4E24] text-white px-6 py-2 rounded-full hover:bg-[#2C3A1A] transition-colors duration-300 flex items-center gap-2">
                  <span>Read More</span>
                  <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-[#3D4E24] text-white px-8 py-3 rounded-full hover:bg-[#2C3A1A] transition-colors duration-300 font-semibold">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      <Subscribtion />
      <Footer />
    </div>
  );
}