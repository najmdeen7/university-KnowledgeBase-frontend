import React from "react";
import ArticleCard from "../Combonents/ArticleCard";
import ContactCard from "../Combonents/ContactCard";
import SubHeader from "../Combonents/SubHeader";
const articlesData = [
  {
    title: "الحصول على البريد الجامعي",
    description: "دليل لعملية الحصول على البريد الجامعي و متطلباته و مميزاته",
  },
  {
    title: "كيفية إعادة تعيين كلمة مرور البريد الإلكتروني الجامعي",
    description:
      "دليل خطوة بخطوة لمساعدتك على استعادة الوصول إلى حساب بريدك الإلكتروني الرسمي",
  },
  {
    title: "طريقة الاتصال بشبكة Wi-Fi الخاصة بالحرم الجامعي",
    description:
      "تعليمات إعداد الاتصال بشبكة الإنترنت اللاسلكية على أجهزة اللابتوب والهواتف الذكية.",
  },
  {
    title: "شرح استخدام بوابة الطالب لعرض النتائج والجداول الدراسية",
    description:
      "نظرة عامة على أهم الخدمات المتوفرة في بوابة الطالب وكيفية الاستفادة منها.",
  },
];

const DigitalServices = () => {
  const page = [
    { title: "الصفحة الرئيسية", href: "#" },
    { title: "الخدمات الرقمية", href: "#" },
  ];
  return (
    <div className="bg-white" dir="rtl">
      <div className="container mx-auto px-4 ">
        <SubHeader breadcrumbs={page}></SubHeader>

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          الخدمات الرقمية
        </h1>

        <div className="flex flex-col lg:flex-row-reverse gap-8">
          {/* القسم الأيمن: قائمة المقالات */}
          <section className="w-full lg:w-2/3 space-y-4">
            {articlesData.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                description={article.description}
              />
            ))}
          </section>

          {/* القسم الأيسر: بطاقة التواصل */}
          <section className="w-full lg:w-1/3">
            <ContactCard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default DigitalServices;
