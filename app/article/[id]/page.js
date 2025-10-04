import { notFound } from 'next/navigation';
import SubHeader from '../../Combonents/SubHeader';
import ContactCard from '../../Combonents/ContactCard';
import ArticleContent from '../../Combonents/ArticleContent';

import allCategories from '../../../data/categories.json';
import allArticles from '../../../data/articles.json';

export async function generateStaticParams() {
    return allArticles.map((article) => ({
        id: article.id.toString(),
    }));
}

export default async function ArticlePage({ params }) {
    // Await params before accessing its properties
    const { id } = await params;

    // Now use the destructured id variable
    const article = allArticles.find((article) => article.id.toString() === id);

    if (!article) {
        notFound();
    }

    const category = allCategories.find((cat) => cat.slug === article.categoryId);

    if (!category) {
        notFound();
    }

    const breadcrumbs = [
        { title: "الصفحة الرئيسية", href: "/" },
        { title: category.name, href: `/category/${category.slug}` },
        { title: article.title, href: `/article/${article.id}` },
    ];

    const articleForContent = {
        title: article.title,
        content: article.content,
        metadata: `آخر تحديث: 30 سبتمبر 2025 | القسم: ${category.name}`
    }

    return (
        <div>
            <SubHeader breadcrumbs={breadcrumbs} />
            <div className="container mx-auto p-8 grid lg:grid-cols-3 gap-12" dir="rtl">
                <aside>
                    <ContactCard />
                </aside>
                <div className="lg:col-span-2">
                    <ArticleContent article={articleForContent} />
                </div>
            </div>
        </div>
    );
}
