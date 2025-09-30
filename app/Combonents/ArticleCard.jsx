import React from 'react';
import Link from 'next/link';

// The component now accepts an "id" prop to create a unique link
const ArticleCard = ({ id, title, description }) => {
    return (
        // The link is now dynamic, using the article's id
        <Link href={`/article/${id}`}>
            <div
                className="bg-[#E6DCC4] p-6 rounded-lg shadow-md border border-gray-200
                   hover:shadow-xl hover:scale-[1.02]
                   transition-all duration-200 ease-in-out"
                dir="rtl"
            >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </Link>
    );
};

export default ArticleCard;