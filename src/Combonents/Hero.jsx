import campusBg from "../assets/campus-bg.jpg";

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${campusBg})` }}
      className="relative h-[450px] bg-cover bg-center"
    >
      {/* الخطوة 1: نضيف z-10 هنا لنجعل هذه الطبقة في المستوى 10
       */}
      <div className="absolute inset-0 bg-primary-blue opacity-80 z-10"></div>

      {/* الخطوة 2: نضيف z-20 هنا لنجعل المحتوى في المستوى 20، أي فوق الطبقة المعتمة
       */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4 z-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-950">
          مركز المساعدة جامعة طرابلس
        </h1>

        <div className="w-full max-w-2xl relative">
          <input
            type="search"
            placeholder="البحث..."
            className="w-full p-4 pr-14 rounded-full text-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition bg-white"
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2">
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
