import SubHeader from "../Combonents/SubHeader";
import ContactCard from "../Combonents/ContactCard";
const sampleArticle = {
  title: "التسجيل في الجامعة",
  category: "القبول والتسجيل",
  content:
    "-------------------------------------------------------------------------------------------------------------------------------- \n -------------------------------------------------------------------------------------------------------------------------------- \n --------------------------------------------------------------------------------------------------------------------------------\n -------------------------------------------------------------------------------------------------------------------------------- \n -------------------------------------------------------------------------------------------------------------------------------- \n -------------------------------------------------------------------------------------------------------------------------------- \n -------------------------------------------------------------------------------------------------------------------------------- \n -------------------------------------------------------------------------------------------------------------------------------- \n -------------------------------------------------------------------------------------------------------------------------------- \n -------------------------------------------------------------------------------------------------------------------------------- \n",

  metadata: "آخر تحديث: 1 سبتمبر 2025 | المصدر: قسم القبول والتسجيل",
};
export default function ArticlePage() {
  const breadcrumbs = [
    { title: "الصفحة الرئيسية", href: "#" },
    { title: sampleArticle.category, href: "#" },
    { title: sampleArticle.title, href: "#" },
  ];

  return (
    <div className="font-tajawal " dir="rtl">
      <SubHeader breadcrumbs={breadcrumbs} />

      <main
        style={{ backgroundColor: "#FFFFFF" }}
        className="container mx-auto p-8 grid lg:grid-cols-3 gap-12"
      >
        <ContactCard></ContactCard>
        <article className="lg:col-span-2">
          <h1
            className="text-4xl font-extrabold mb-6"
            style={{ color: "#0A2D57" }}
          >
            {sampleArticle.title}
          </h1>

          <div className="text-lg text-gray-800 space-y-4 whitespace-pre-line">
            {sampleArticle.content}
          </div>

          <div className="mt-12 pt-4 border-t">
            <p className="text-sm text-gray-500">{sampleArticle.metadata}</p>
            <div className="mt-4">
              <span className="ml-4">هل كان هذا مفيداً ؟</span>
              <a href="#" className="text-green-600 font-bold hover:underline">
                نعم
              </a>
              <a
                href="#"
                className="text-red-600 font-bold hover:underline mr-2"
              >
                لا
              </a>
            </div>
          </div>
        </article>
        
      </main>
    </div>
  );
}
