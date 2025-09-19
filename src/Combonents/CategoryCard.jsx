export default function CategoryCard({ title, questions }) {
  return (
    <div
      style={{ backgroundColor: "#FFFFFF" }}
      className="p-6 rounded-lg shadow-lg flex flex-col h-full relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
    >
      <h3 className="font-bold text-xl mb-4 text-right">
        <a
          href="#"
          className="text-gray-900 hover:text-[theme(colors.primary-blue)] after:absolute after:inset-0"
        >
          {title}
        </a>
      </h3>

      <hr style={{ borderColor: "rgba(0, 0, 0, 0.1)" }} className="mb-4" />

      <ul className="space-y-3 text-right flex-grow relative z-10">
        {questions.map((question, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-gray-600 hover:text-[theme(colors.primary-blue)] transition-colors"
            >
              {question}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
