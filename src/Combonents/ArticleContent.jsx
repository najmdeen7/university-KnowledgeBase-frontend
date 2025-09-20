// src/Combonents/ArticleContent.jsx
import React from 'react';

const ArticleContent = () => {
  return (
    // نستخدم Fragment <>...</> لتجميع العناصر بدون إضافة div غير ضروري
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-6 pb-4 border-b-2">
        التسجيل في الجامعة
      </h1>
      <article className="prose prose-lg max-w-none text-gray-700">
        <p>هنا سيكون محتوى المقال التفصيلي حول كيفية التسجيل في الجامعة. يمكنك إضافة الفقرات، القوائم، الصور، وكل ما يتعلق بالموضوع.</p>
        <p>للمزيد من المعلومات، يرجى زيارة قسم القبول والتسجيل في مبنى الإدارة الرئيسي.</p>
      </article>
      <div className="mt-8 pt-4 border-t text-sm text-gray-500">
        <span>آخر تحديث: 1 سبتمبر 2025</span>
      </div>
    </>
  );
};

export default ArticleContent;