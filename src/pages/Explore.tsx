import React, { useState } from 'react';
import { categories, contentLibrary } from '../data/content';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { ContentCard } from '../components/ContentCard';

export const Explore: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchResults = searchQuery.trim() !== '' 
    ? contentLibrary.filter(item => 
        item.message.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="flex flex-col min-h-screen pb-24 pt-safe px-4 max-w-md mx-auto">
      <header className="py-6">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Explore</h1>
        
        <div className="mt-4 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3.5 bg-white border-none rounded-2xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow"
            placeholder="Search flowers, morning, peace..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <main className="flex-grow">
        {searchQuery.trim() !== '' ? (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-700">
              {searchResults.length} results for "{searchQuery}"
            </h2>
            {searchResults.length > 0 ? (
              <div className="flex flex-col gap-8">
                {searchResults.map(card => (
                  <ContentCard key={card.id} card={card} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-gray-500 bg-white rounded-3xl shadow-sm">
                <p>No results found.</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-amber-600 font-medium hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 mt-2">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className={`flex flex-col items-center justify-center p-6 rounded-3xl transition-transform active:scale-95 shadow-sm ${category.color}`}
              >
                <span className="text-4xl mb-3 block transform group-hover:scale-110 transition-transform">{category.icon}</span>
                <span className="font-semibold text-center leading-tight">{category.name}</span>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
