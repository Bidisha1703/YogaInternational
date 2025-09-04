export default function Subscribtion() {
    return(
        <div>
{/* Subscribtion */}
      <div className="w-full flex flex-col items-center justify-center py-12 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#3D4E24] mb-0">
        Subscribe to our website
      </h2>
      <p className="text-[#3D4E24] mb-6 ">Get update for new classes</p>

      {/* Input + Button */}
      <div className="flex w-full max-w-lg shadow-md rounded-full overflow-hidden">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow px-6 py-3 outline-none text-gray-700 placeholder-gray-400"
        />
        <button className="bg-[#f6c9aa] px-6 md:px-8 py-3 font-bold text-[#3D4E24] hover:bg-[#3D4E24] hover:text-white transition-colors rounded-full">
          Subscribe
        </button>
      </div>
    </div>
</div>
    );
}