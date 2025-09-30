import { notFound } from 'next/navigation';
import SubHeader from '../../Combonents/SubHeader';
import ContactCard from '../../Combonents/ContactCard';
import ArticleContent from '../../Combonents/ArticleContent';

import allCategories from '../../../data/categories.json';
import allArticles from '../../../data/articles.json';

// This function gets the data for a single article
async function getArticleData(id) {
    const article = allArticles.find((article) => article.id.toString() === id);

    if (!article) {
        return null;
    }

    const category = allCategories.find((cat) => cat.slug === article.categoryId);

    return { article, category };
}

export default async function ArticlePage({ params }) {
    // The "id" comes from the folder name [id]
    const data = await getArticleData(params.id);

    if (!data) {
        notFound();
    }

    // Create dynamic breadcrumbs for the SubHeader
    const breadcrumbs = [
        { title: "الصفحة الرئيسية", href: "/" },
        { title: data.category.name, href: `/category/${data.category.slug}` },
        { title: data.article.title, href: `/article/${data.article.id}` },
    ];

    // Prepare the article object for the ArticleContent component
    const articleForContent = {
        title: data.article.title,
        content: data.article.content,
        metadata: `آخر تحديث: 30 سبتمبر 2025 | القسم: ${data.category.name}`
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