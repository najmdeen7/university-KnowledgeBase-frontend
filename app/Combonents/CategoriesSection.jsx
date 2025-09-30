// app/Combonents/CategoriesSection.jsx
import CategoryCard from "./CategoryCard";

export default function CategoriesSection({ categories = [] }) {
    return (
        <section className="bg-[#E6DCC4]  py-12 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#0A2D57]">
                    الفئات
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            title={category.name}
                            // 1. التصحيح: استخدمنا "questions" مباشرة، لأن البيانات مجهزة بالفعل
                            questions={category.questions}
                            // 2. التصحيح: قمنا بتمرير "slug" إلى المكون لإنشاء الرابط الصحيح
                            slug={category.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}