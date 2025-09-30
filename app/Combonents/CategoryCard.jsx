import Link from "next/link"; // 1. Changed import to use Next.js's Link component

// 2. Added "slug" to the props to create a dynamic link
export default function CategoryCard({ title, questions, slug }) {
  return (
      // 3. Replaced inline style with Tailwind class "bg-white"
      <div
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
      >
        <h3 className="font-bold text-xl mb-4 text-right">
          {/* 4. Changed "to" to "href" and used the dynamic slug */}
          <Link
              href={`/category/${slug}`}
              className="text-gray-900 hover:text-blue-600 after:absolute after:inset-0"
          >
            {title}
          </Link>
        </h3>

        <hr style={{ borderColor: "rgba(0, 0, 0, 0.1)" }} className="mb-4" />

        <ul className="space-y-3 text-right flex-grow relative z-10">
          {questions.map((question, index) => (
              <li key={index}>
                <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {question}
                </a>
              </li>
          ))}
        </ul>
      </div>
  );
}