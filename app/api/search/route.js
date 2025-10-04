import { NextResponse } from 'next/server';
import articles from '../../../data/articles.json';

export async function GET(request) {
    // Get the search query from the URL (e.g., /api/search?q=test)
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
        return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const lowerCaseQuery = query.toLowerCase();

    // Filter articles based on the query (searches title and content)
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(lowerCaseQuery) ||
        article.content.toLowerCase().includes(lowerCaseQuery)
    );

    return NextResponse.json(filteredArticles);
}