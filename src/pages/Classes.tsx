import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Subscribtion from "@/component/Subscribtion";
import { useState } from "react";
import { IoChevronDown, IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Classes() {
  const [sortOpen, setSortOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const classes = [
    {
      id: 1,
      title: "Esther Ekhart",
      subtitle: "Strength snack: 20 minutes to wake up your power",
      duration: "20 min.",
      level: "Level: all",
      type: "Mixed movement",
      img: "/image 6.png ",
      isNew: true,
    },
    {
      id: 2,
      title: "Esther Ekhart",
      subtitle: "Strength snack: 20 minutes to wake up your power",
      duration: "20 min.",
      level: "Level: all",
      type: "Mixed movement",
      img: "/image 6.png ",
      isNew: true,
    },
    {
      id: 3,
      title: "Esther Ekhart",
      subtitle: "Strength snack: 20 minutes to wake up your power",
      duration: "20 min.",
      level: "Level: all",
      type: "Mixed movement",
      img: "/image 6.png ",
      isNew: true,
    },
    {
      id: 4,
      title: "Yin Yoga",
      subtitle: "Deep stretch for flexibility and relaxation",
      duration: "45 min.",
      level: "Level: beginner",
      type: "Yin Yoga",
      img: "/image 6.png ",
      isNew: false,
    },
    {
      id: 5,
      title: "Vinyasa Flow",
      subtitle: "Dynamic sequence to build heat and strength",
      duration: "60 min.",
      level: "Level: intermediate",
      type: "Vinyasa",
      img: "/image 6.png ",
      isNew: false,
    },
    {
      id: 6,
      title: "Morning Meditation",
      subtitle: "Start your day with clarity and intention",
      duration: "15 min.",
      level: "Level: all",
      type: "Meditation",
      img: "/image 6.png ",
      isNew: true,
    },
  ];

  // Determine which classes to display based on showAll state
  const displayedClasses = showAll ? classes : classes.slice(0, 3);

  return (
    <div>
      <Navbar />
      <div className="bg-[#E2F1CD] py-12 px-4 md:px-12">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-green-900 text-center mb-2">
          Yoga classes
        </h2>
        <p className="text-center text-green-900 max-w-2xl mx-auto mb-10 text-sm pt-3">
          What do you feel like today? A powerful Vinyasa Yoga flow, a grounding Yin class, or a calming meditation?
        </p>

        {/* Classes header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-green-900 pl-4">Classes</h3>
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 border rounded-full px-4 py-2 text-green-900 hover:bg-[#3D4E24] mr-4 hover:text-white transition-all duration-300 group"
            >
              Sorted By <IoChevronDown className="hover:text-white" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg p-2 z-50">
                <button className="block w-full text-left px-3 py-1 hover:bg-green-100">Newest</button>
                <button className="block w-full text-left px-3 py-1 hover:bg-green-100">Duration</button>
                <button className="block w-full text-left px-3 py-1 hover:bg-green-100">Level</button>
              </div>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {displayedClasses.map((item) => (
            <Link to="/detail" key={item.id}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
                {item.isNew && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-green-900">{item.title}</h4>
                  <p className="text-sm text-green-900 mb-2">{item.subtitle}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-700">
                    <span className="flex items-center gap-1">
                      <IoTimeOutline /> {item.duration}
                    </span>
                    <span>{item.level}</span>
                    <span>{item.type}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show All / Show Less */}
        {classes.length > 3 && (
          <div className="mt-6 text-right">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-green-900 font-medium hover:underline"
            >
              {showAll ? `Show Less` : `Show All (${classes.length}) →`}
            </button>
          </div>
        )}
      </div>

      <Subscribtion />
      <Footer />
    </div>
  );
}