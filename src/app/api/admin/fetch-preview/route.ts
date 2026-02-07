import { NextRequest, NextResponse } from 'next/server';
import { fetchBookMetadata } from '@/lib/fetchBookMetadata';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Validate URL
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL provided' },
        { status: 400 }
      );
    }

    // Fetch book metadata
    const metadata = await fetchBookMetadata(url);

    return NextResponse.json({
      success: true,
      data: {
        title: metadata.title,
        author: metadata.author || 'Unknown',
        publisher: metadata.publisher || 'Unknown',
        isbn13: metadata.isbn13 || '',
        description: metadata.description || 'No description available',
        coverImageUrl: metadata.coverImageUrl || '/placeholder-book.jpg',
        language: metadata.language || 'English',
        source_url: url,
      },
    });
  } catch (error: any) {
    console.error('Error fetching book metadata:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch book data from URL' },
      { status: 500 }
    );
  }
}
