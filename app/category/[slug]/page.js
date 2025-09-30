import { notFound } from 'next/navigation';
import ArticleCard from '../../Combonents/ArticleCard';
import ContactCard from '../../Combonents/ContactCard';
import SubHeader from '../../Combonents/SubHeader';

// We import our data directly because this is a Server Component
import allCategories from '../../../data/categories.json';
import allArticles from '../../../data/articles.json';

// This function fetches the data for a specific category
async function getDataForCategory(slug) {
    const category = allCategories.find((cat) => cat.slug === slug);

    // If the category doesn't exist, we'll show a 404 page
    if (!category) {
        return null;
    }

    const articles = allArticles.filter((article) => article.categoryId === slug);

    return { category, articles };
}

// This is our main page component
export default async function CategoryPage({ params }) {
    // Get the data for the category specified in the URL
    const data = await getDataForCategory(params.slug);

    // If data is null, Next.js will render the not-found page
    if (!data) {
        notFound();
    }

    // Create dynamic breadcrumbs
    const breadcrumbs = [
        { title: "الصفحة الرئيسية", href: "/" },
        { title: data.category.name, href: `/category/${params.slug}` },
    ];

    return (
        <div className="bg-white">
            <SubHeader breadcrumbs={breadcrumbs} />
            <div className="container mx-auto px-4 py-8" dir="rtl">
                {/* The title is now dynamic */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8">
                    {data.category.name}
                </h1>

                <div className="flex flex-col lg:flex-row-reverse gap-8">
                    {/* The list of articles is now dynamic */}
                    <section className="w-full lg:w-2/3 space-y-4">
                        {data.articles.map((article) => (
                            <ArticleCard
                                key={article.id}
                                id={article.id} // <-- Pass the id here
                                title={article.title}
                                description={article.content.substring(0, 120) + "..."}
                            />
                        ))}
                    </section>

                    {/* The sidebar remains the same */}
                    <section className="w-full lg:w-1/3">
                        <ContactCard />
                    </section>
                </div>
            </div>
        </div>
    );
}