// app/Combonents/ArticleContent.jsx
import React from 'react';

// 1. The component now accepts an "article" object as a prop.
const ArticleContent = ({ article }) => {
    // A fallback in case the article data is not available yet
    if (!article) {
        return <div>Loading article...</div>;
    }

    return (
        <>
            {/* 2. The title is now dynamic, coming from the article prop */}
            <h1 className="text-4xl font-bold text-gray-800 mb-6 pb-4 border-b-2">
                {article.title}
            </h1>

            {/* 3. The content is also dynamic */}
            <article className="prose prose-lg max-w-none text-gray-700">
                <p>{article.content}</p>
            </article>

            {/* 4. The metadata is dynamic */}
            <div className="mt-8 pt-4 border-t text-sm text-gray-500">
                <span>{article.metadata}</span>
            </div>
        </>
    );
};

export default ArticleContent;