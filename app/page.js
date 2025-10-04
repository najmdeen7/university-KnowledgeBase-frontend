import Hero from "./Combonents/Hero";
import CategoriesSection from "./Combonents/CategoriesSection";
import allCategories from "../data/categories.json";
import allArticles from "../data/articles.json";

function getHomepageData() {
    return allCategories.map(category => {

        const articlesForCategory = allArticles
            .filter(article => article.categoryId === category.slug)
            .map(article => ({ id: article.id, title: article.title })); // <-- Change is here

        return {
            id: category.id,
            slug: category.slug,
            name: category.name,
            questions: articlesForCategory,
        };
    });
}

export default function HomePage() {
    const categories = getHomepageData();

    return (

        <>
            <Hero />
            <CategoriesSection categories={categories} />
        </>
    );
}