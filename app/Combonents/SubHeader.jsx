'use client'; // 1. Convert to a Client Component to use hooks

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SubHeader({ breadcrumbs = [] }) {
  // 2. Add state for the query and suggestions
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 3. Add the useEffect for debounced searching (same logic as Hero)
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }
    setIsLoading(true);
    const debounceTimer = setTimeout(() => {
      fetch(`/api/search?q=${query}`)
          .then(res => res.json())
          .then(data => {
            setSuggestions(data);
            setIsLoading(false);
          });
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
      <div className="bg-gray-100 py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center" dir="rtl">
          {/* Breadcrumbs Section */}
          <div className="text-sm text-gray-600 flex items-center gap-2">
            {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.title}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                      <span className="mx-2 select-none">&gt;</span>
                  )}
                </div>
            ))}
          </div>

          {/* Search Bar Section - now with state and suggestions */}
          <div className="w-full max-w-sm relative"> {/* Added relative for dropdown positioning */}
            <div className="relative">
              <input
                  type="search"
                  placeholder="البحث..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="text-gray-700 w-full p-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                {/* Search Icon SVG */}
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* 4. The suggestions dropdown (same as Hero) */}
            {(isLoading || suggestions.length > 0) && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg text-right overflow-hidden z-30">
                  {isLoading && <div className="p-3 text-gray-500">جاري البحث...</div>}
                  {!isLoading && (
                      <ul>
                        {suggestions.slice(0, 5).map((article) => (
                            <li key={article.id}>
                              <Link
                                  href={`/article/${article.id}`}
                                  className="block p-3 text-gray-800 hover:bg-gray-100 transition-colors"
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