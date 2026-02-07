import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      subtitle,
      isbn13,
      isbn10,
      author,
      publisher,
      description,
      coverImageUrl,
      language,
      pageCount,
      publishedAt,
      source_url,
      amazonUrl,
      flipkartUrl,
    } = body;

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    // TODO: Connect to database and save book as DRAFT
    // For now, return success
    
    return NextResponse.json({
      success: true,
      message: 'Book submitted for admin review',
      book: {
        title,
        author,
        publisher,
        status: 'PENDING_REVIEW',
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to submit book' },
      { status: 500 }
    );
  }
}
