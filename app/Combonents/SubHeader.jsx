import Link from 'next/link'; // 1. Import Link from Next.js

export default function SubHeader({ breadcrumbs = [] }) {
  return (
      // 2. Replaced inline style with a Tailwind class
      <div className="bg-gray-100 py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center" dir="rtl">

          {/* Breadcrumbs Section */}
          <div className="text-sm text-gray-600 flex items-center gap-2">
            {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  {/* 3. Replaced <a> with <Link> for fast client-side navigation */}
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.title}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                      <span className="mx-2 select-none">&gt;</span>
                  )}
                </div>
            ))}
          </div>

          {/* Search Bar Section */}
          <div className="w-full max-w-sm">
            <div className="relative">
              <input
                  type="search"
                  placeholder="البحث..."
                  className="text-gray-700 w-full p-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                {/* 4. Added the path data to draw the search icon */}
                <svg
                    className="h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                  <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}