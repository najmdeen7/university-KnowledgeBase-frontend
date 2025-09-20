export default function SubHeader({ breadcrumbs = [] }) {
  return (
    <div style={{ backgroundColor: "#F3F4F6" }} className="py-4 px-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-600 flex items-center">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              <a href={crumb.href} className="hover:underline">
                {crumb.title}
              </a>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2">&gt;</span>
              )}
            </div>
          ))}
        </div>
        <div className="w-full max-w-sm">
          <div className="relative">
            <input
              type="search"
              placeholder="البحث..."
              className=" text-gray-400 w-full p-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg className="h-5 w-5 text-gray-600 "></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
