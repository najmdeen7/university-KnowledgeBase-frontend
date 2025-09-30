import Hero from "./Combonents/Hero";
import CategoriesSection from "./Combonents/CategoriesSection";
import allCategories from "../data/categories.json";
import allArticles from "../data/articles.json";

function getHomepageData() {
    return allCategories.map(category => {
        const questionTitles = allArticles
            .filter(article => article.categoryId === category.slug)
            .map(article => article.title);
        return {
            id: category.id,
            slug: category.slug,
            name: category.name,
            questions: questionTitles,
        };
    });
}

export default function HomePage() {
    const categories = getHomepageData();

    return (
        // We use a Fragment <>...</> instead of a <main> tag
        <>
            <Hero />
            <CategoriesSection categories={categories} />
        </>
    );
}