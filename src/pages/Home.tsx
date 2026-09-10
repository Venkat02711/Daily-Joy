import React from 'react';
import { getFeaturedCard } from '../data/content';
import { ContentCard } from '../components/ContentCard';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredCard = getFeaturedCard();

  return (
    <div className="flex flex-col min-h-screen pb-24 pt-safe px-4 max-w-md mx-auto">
      <header className="py-6 text-center">
        <h1 className="text-3xl font-bold text-amber-900 tracking-tight">Daily Joy</h1>
        <p className="text-gray-500 mt-1 font-medium">A little happiness every day.</p>
      </header>

      <main className="flex-grow flex flex-col items-center">
        <ContentCard card={featuredCard} featured />
        
        <div className="mt-12 mb-6 w-full flex flex-col items-center">
          <Link 
            to="/explore"
            className="flex items-center gap-2 bg-white px-8 py-4 rounded-full shadow-sm border border-gray-100 text-amber-700 font-bold hover:shadow-md transition active:scale-95"
          >
            <Compass className="w-5 h-5" />
            Explore More Positivity
          </Link>
        </div>
      </main>
    </div>
  );
};
