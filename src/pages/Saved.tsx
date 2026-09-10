import React from 'react';
import { useAppContext } from '../context/AppContext';
import { ContentCard } from '../components/ContentCard';
import { Heart } from 'lucide-react';

export const Saved: React.FC = () => {
  const { savedCards } = useAppContext();

  return (
    <div className="flex flex-col min-h-screen pb-24 pt-safe px-4 max-w-md mx-auto">
      <header className="py-6">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-500 fill-red-500" />
          Saved
        </h1>
      </header>

      <main className="flex-grow mt-2">
        {savedCards.length > 0 ? (
          <div className="flex flex-col gap-8">
            {savedCards.map(card => (
              <ContentCard key={card.id} card={card} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl shadow-sm border border-orange-50/50">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-red-300" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">No saved pictures yet</h2>
            <p className="text-gray-500 max-w-[200px]">Your saved pictures will appear here ❤️</p>
          </div>
        )}
      </main>
    </div>
  );
};
