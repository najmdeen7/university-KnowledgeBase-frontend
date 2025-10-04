'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Hero() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // This useEffect hook runs whenever the 'query' changes (i.e., when you type)
    useEffect(() => {
        // 1. Don't search if the query is too short
        if (query.length < 2) {
            setSuggestions([]);
            return;
        }

        setIsLoading(true);

        // 2. This is the debounce timer
        const debounceTimer = setTimeout(() => {
            fetch(`/api/search?q=${query}`)
                .then(res => res.json())
                .then(data => {
                    setSuggestions(data);
                    setIsLoading(false);
                });
        }, 300); // 300ms delay

        // 3. Cleanup: cancel the timer if the user types again
        return () => clearTimeout(debounceTimer);

    }, [query]);

    // This handles the case where the user presses Enter
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        router.push(`/search?q=${query}`);
    };

    return (
        <div className="relative h-[450px]">
            <Image
                src="/campus-bg.jpg"
                alt="Background of the university campus"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-950/70"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
                    مركز المساعدة جامعة طرابلس
                </h1>
                <div className="w-full max-w-2xl relative">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="search"
                            placeholder="البحث..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full p-4 pr-14 rounded-full text-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition bg-white"
                        />
                        {/* Search Icon SVG */}
                    </form>

                    {/* 4. This is the new suggestions dropdown */}
                    {(isLoading || suggestions.length > 0) && (
                        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg text-right overflow-hidden z-30" dir="rtl">
                            {isLoading && <div className="p-4 text-gray-500">جاري البحث...</div>}
                            {!isLoading && (
                                <ul>
                                    {suggestions.slice(0, 5).map((article) => ( // Show top 5 results
                                        <li key={article.id}>
                                            <Link
                                                href={`/article/${article.id}`}
                                                className="block p-4 text-gray-800 hover:bg-gray-100 transition-colors"
                                            >
                                                {article.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}