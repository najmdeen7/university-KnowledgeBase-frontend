import { Link } from "react-router-dom";

export default function CategoryCard({ title, questions }) {
  return (
    <div
      style={{ backgroundColor: "#FFFFFF" }}
      className="p-6 rounded-lg shadow-lg flex flex-col h-full relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
    >
      <h3 className="font-bold text-xl mb-4 text-right">
        {/* The link now points to the Digital Services page */}
        <Link
          to="/services"
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