import { mockTeluguBooks } from '@/lib/mockBooks';

export default function Home() {
  const featuredBooks = mockTeluguBooks.slice(0, 3);
  const allBooks = mockTeluguBooks;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            చుక్కని - తెలుగు పుస్తకాల ప్రపంచం
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover the finest Telugu literature - Rate, Review & Share
          </p>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search for Telugu books, authors..."
              className="flex-1 max-w-md px-6 py-3 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
            />
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-50 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Books Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-yellow-400">⭐</span>
          Featured Classics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition transform duration-300 border border-gray-700"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-300">{book.title}</h3>
                <p className="text-gray-300 mb-3">{book.author}</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < Math.floor(book.rating) ? '★' : '☆'}</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">
                    {book.rating} ({book.ratingCount} ratings)
                  </span>
                </div>
                <button className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Books Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Top Telugu Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allBooks.map((book) => (
            <div
              key={book.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-200 border border-gray-700"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-sm mb-1 truncate">{book.title}</h4>
                <p className="text-xs text-gray-400 mb-2 truncate">{book.author}</p>
                <div className="flex items-center text-yellow-400 text-sm">
                  <span>★</span>
                  <span className="ml-1">{book.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 Chukkani - Telugu Book Database. Built with ❤️ for Telugu literature lovers.</p>
        </div>
      </footer>
    </div>
  );
}
