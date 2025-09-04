import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Subscribtion from "@/component/Subscribtion";

export default function News() {
  return (
    <div className="font-sans text-gray-800 min-w-screen">
      <Navbar />
      
      {/* News Header Section */}
      <section className="bg-orange-100 py-12 px-4 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-medium text-[#3D4E24] text-center mb-6">
            Top Trending News
          </h1>
          <p className="text-[#4E6130] text-center mb-8 max-w-2xl mx-auto">
            The most popular news you should know to keep up with the latest yoga and wellness updates.
          </p>
          
          {/* Divider */}
          <div className="border-t border-[#626B54] mb-12 mx-auto w-24"></div>
          
          {/* News Items */}
          <div className="space-y-12">
            {/* News Item 1 */}
            <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src="/yoga-studio-opening.jpg"
                  alt="New Yoga Studio Opening"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-[#728555] text-sm font-semibold mb-4">17 February 2022</p>
                <h3 className="text-2xl font-semibold text-[#3D4E24] mb-4">
                  New Yoga Studio Officially Announces Grand Opening Schedule...
                </h3>
                <p className="text-[#4E6130] leading-relaxed">
                  Sed at perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
            
            {/* News Item 2 */}
            <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src="/yoga-festival.jpeg"
                  alt="Annual Yoga Festival"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-[#728555] text-sm font-semibold mb-4">26 February 2022</p>
                <h3 className="text-2xl font-semibold text-[#3D4E24] mb-4">
                  The Annual Yoga Festival That Is Held Is Very Lively...
                </h3>
                <p className="text-[#4E6130] leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
              </div>
            </div>
            
            {/* News Item 3 */}
            <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src="/wellness-program.jpeg"
                  alt="Wellness Program"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-[#728555] text-sm font-semibold mb-4">20 February 2022</p>
                <h3 className="text-2xl font-semibold text-[#3D4E24] mb-4">
                  Enhanced Wellness Programs For Holistic Health...
                </h3>
                <p className="text-[#4E6130] leading-relaxed">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                </p>
              </div>
            </div>

            {/* News Item 4 */}
            <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src="/meditation-retreat.jpg"
                  alt="Meditation Retreat"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-[#728555] text-sm font-semibold mb-4">15 March 2022</p>
                <h3 className="text-2xl font-semibold text-[#3D4E24] mb-4">
                  New Meditation Retreat Offers Deep Spiritual Connection...
                </h3>
                <p className="text-[#4E6130] leading-relaxed">
                  Discover the transformative power of silence and mindfulness at our new meditation retreat. Designed for both beginners and experienced practitioners, this program offers a unique opportunity to disconnect from daily stress and reconnect with your inner self.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Subscribtion />
      <Footer />
    </div>
  );
}