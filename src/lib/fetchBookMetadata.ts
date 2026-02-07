import axios from 'axios';

interface BookMetadata {
  title: string;
  subtitle?: string;
  isbn10?: string;
  isbn13?: string;
  coverImageUrl?: string;
  description?: string;
  author?: string;
  publisher?: string;
  publishedAt?: string;
  pageCount?: number;
  language?: string;
}

export async function fetchFromAmazon(url: string): Promise<BookMetadata> {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      timeout: 10000,
    });

    const html = response.data;
    
    // Parse basic metadata from Amazon page
    // This is a simplified parser - in production use jsdom or cheerio
    const titleMatch = html.match(/<h1[^>]*id="title"[^>]*>([^<]+)<\/h1>/) || 
                      html.match(/<span[^>]*id="productTitle"[^>]*>([^<]+)<\/span>/);
    const authorMatch = html.match(/By\s*<a[^>]*>([^<]+)<\/a>/);
    const publisherMatch = html.match(/Publisher[^:]*:[^<]*<[^>]*>([^<]+)</);
    const priceMatch = html.match(/\$([0-9.]+)/);

    // Try to extract ISBN from URL or metadata
    const isbnMatch = url.match(/\/dp\/([A-Z0-9]+)/);

    return {
      title: titleMatch ? titleMatch[1].trim() : 'Unknown Title',
      author: authorMatch ? authorMatch[1].trim() : undefined,
      publisher: publisherMatch ? publisherMatch[1].trim() : undefined,
      isbn13: isbnMatch ? isbnMatch[1] : undefined,
    };
  } catch (error) {
    throw new Error(`Failed to fetch Amazon URL: ${error}`);
  }
}

export async function fetchFromFlipkart(url: string): Promise<BookMetadata> {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      timeout: 10000,
    });

    const html = response.data;
    
    // Parse Flipkart page
    const titleMatch = html.match(/<h1[^>]*class="[^"]*pdpHeading[^"]*"[^>]*>([^<]+)<\/h1>/);
    const authorMatch = html.match(/Author:\s*<[^>]*>([^<]+)</);
    const publisherMatch = html.match(/Publisher:\s*<[^>]*>([^<]+)</);
    const isbnMatch = html.match(/ISBN[^:]*:\s*<[^>]*>([^<]+)</);

    return {
      title: titleMatch ? titleMatch[1].trim() : 'Unknown Title',
      author: authorMatch ? authorMatch[1].trim() : undefined,
      publisher: publisherMatch ? publisherMatch[1].trim() : undefined,
      isbn13: isbnMatch ? isbnMatch[1].trim() : undefined,
    };
  } catch (error) {
    throw new Error(`Failed to fetch Flipkart URL: ${error}`);
  }
}

export async function fetchBookMetadata(url: string): Promise<BookMetadata> {
  if (url.includes('amazon.com') || url.includes('amazon.in')) {
    return fetchFromAmazon(url);
  } else if (url.includes('flipkart.com')) {
    return fetchFromFlipkart(url);
  } else {
    throw new Error('Unsupported URL source. Please use Amazon or Flipkart.');
  }
}
