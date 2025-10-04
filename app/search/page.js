'use client'; // This component needs to be a Client Component to fetch data

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ArticleCard from '../Combonents/ArticleCard';
import SubHeader from '../Combonents/SubHeader';

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (query) {
            setIsLoading(true);
            fetch(`/api/search?q=${query}`)
                .then(res => res.json())
                .then(data => {
                    setResults(data);
                    setIsLoading(false);
                });
        }
    }, [query]);

    const breadcrumbs = [
        { title: "الصفحة الرئيسية", href: "/" },
        { title: `نتائج البحث عن: "${query}"`, href: `/search?q=${query}` },
    ];

    return (
        <div>
            <SubHeader breadcrumbs={breadcrumbs} />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6" dir="rtl">
                    نتائج البحث عن: "{query}"
                </h1>
                {isLoading ? (
                    <p>جاري البحث...</p>
                ) : results.length > 0 ? (
                    <div className="space-y-4">
                        {results.map(article => (
                            <ArticleCard
                                key={article.id}
                                id={article.id}
                                title={article.title}
                                description={article.content.substring(0, 150) + '...'}
                            />
                        ))}
                    </div>
                ) : (
                    <p>لا توجد نتائج تطابق بحثك.</p>
                )}
            </div>
        </div>
    );
}