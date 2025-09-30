import Image from "next/image"; // 1. Import the Next.js Image component

export default function Hero() {
  return (
      // 2. The main container is now a positioning reference for the image
      <div className="relative h-[450px]">

        {/* 3. Use the Image component as the background layer */}
        <Image
            src="/campus-bg.jpg" // Assumes campus-bg.jpg is in the "public" folder
            alt="Background of the university campus"
            fill // This makes the image fill the parent div
            className="object-cover" // This is like "background-size: cover"
        />

        {/* The overlay */}
        <div className="absolute inset-0 bg-blue-950/70"></div>

        {/* The content, which is automatically on top */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            مركز المساعدة جامعة طرابلس
          </h1>

          <div className="w-full max-w-2xl relative">
            <input
                type="search"
                placeholder="البحث..."
                className="w-full p-4 pr-14 rounded-full text-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition bg-white"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                  className="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
  );
}