import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { categories, contentLibrary } from '../data/content';
import { ContentCard } from '../components/ContentCard';
import { ChevronLeft } from 'lucide-react';

export const CategoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const category = categories.find(c => c.id === id);
  const categoryContent = contentLibrary.filter(item => item.category === id);

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <p className="text-gray-500 mb-4">Category not found.</p>
        <button onClick={() => navigate('/explore')} className="text-amber-600 font-bold">
          Go back to Explore
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pb-24 pt-safe px-4 max-w-md mx-auto">
      <header className="py-4 flex items-center sticky top-0 z-10 bg-[#FDFBF7]/90 backdrop-blur-md">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-gray-200/50 transition-colors mr-2"
          aria-label="Go back"
        >
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
          <span>{category.icon}</span>
          {category.name}
        </h1>
      </header>

      <main className="flex-grow mt-4">
        {categoryContent.length > 0 ? (
          <div className="flex flex-col gap-8">
            {categoryContent.map(card => (
              <ContentCard key={card.id} card={card} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-gray-500 bg-white rounded-3xl shadow-sm border border-orange-50/50">
            <p className="font-medium text-lg">More beautiful pictures are coming soon.</p>
          </div>
        )}
      </main>
    </div>
  );
};
