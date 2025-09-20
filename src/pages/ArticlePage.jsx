import SubHeader from "../Combonents/SubHeader";
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
        <aside className="lg:col-span-1 h-full flex items-center justify-center gap-2.5">
          <div
            style={{ backgroundColor: "#0A2D57" }}
            className=" flex p-6 rounded-lg text-white h-2/3 w-2/3 flex-col items-center justify-center"
          >
            <h3 className="font-bold text-xl mb-4">مواضيع ذات صلة:</h3>
            <hr className=" text-white w-full p-5"></hr>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  التخصصات الموجودة
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  تسجيل الطلبة الأجانب
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  تنزيل المواد
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
