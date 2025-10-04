import Link from "next/link";

export default function CategoryCard({ title, questions, slug }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
      {/* This main link still goes to the category page */}
      <h3 className="font-bold text-xl mb-4 text-right">
        <Link
          href={`/category/${slug}`}
          className="text-gray-900 hover:text-blue-600 after:absolute after:inset-0"
        >
          {title}
        </Link>
      </h3>

      <hr style={{ borderColor: "rgba(0, 0, 0, 0.1)" }} className="mb-4" />

      {/* 👇 This is the main fix 👇 */}
      <ul className="space-y-3 text-right flex-grow relative z-10">
        {questions.map((question) => (
          <li key={question.id}>
            {/* Each question is now a Link pointing to its own article page */}
            <Link
              href={`/article/${question.id}`}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {question.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
