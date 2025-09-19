import CategoryCard from "./CategoryCard";

const categoriesData = [
  {
    title: "القبول و التسجيل",
    questions: [
      "عملية التسجيل في الجامعة",
      "الأقسام العلمية",
      "لوائح الطلبة",
      "اجراءات الانتقال بين الكليات",
    ],
  },
  {
    title: "الخدمات الرقمية",
    questions: [
      "الحصول على بريد جامعي",
      "تنزيل المقررات",
      "البوابة الرقمية",
      "منظومة البحث العلمي",
    ],
  },
  {
    title: "شؤون الطلبة",
    questions: [
      "اتحاد الطلبة",
      "استخراج بطاقة طالب",
      "السكن الجامعي",
      "استخراج استمارة التخرج",
    ],
  },
  {
    title: "الشؤون المالية",
    questions: [
      "استخراج المباشرة",
      "المنح الدراسية",
      "رسوم الطلبة الأجانب",
      "عمليات الإيجار",
    ],
  },
];

export default function CategoriesSection() {
  return (
    <section style={{ backgroundColor: "#E6DCC4" }} className="py-12 px-4">
      <div className="container mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "#0A2D57" }}
        >
          الفئات
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoriesData.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              questions={category.questions}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
