import React, { useState } from 'react';
import { ContentItem } from '../types';
import { Heart, Share, Download, Check } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { cn } from '../utils/cn';

interface ContentCardProps {
  card: ContentItem;
  featured?: boolean;
}

export const ContentCard: React.FC<ContentCardProps> = ({ card, featured = false }) => {
  const { isSaved, saveCard, removeCard } = useAppContext();
  const saved = isSaved(card.id);
  const [downloading, setDownloading] = useState(false);
  const [imgSrc, setImgSrc] = useState(card.image);
  const [imgError, setImgError] = useState(false);

  React.useEffect(() => {
    setImgSrc(card.image);
    setImgError(false);
  }, [card.image]);

  const toggleSave = () => {
    if (saved) {
      removeCard(card.id);
    } else {
      saveCard(card);
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Daily Joy',
          text: card.message,
          url: window.location.href, // Sharing the app URL for now
        });
      } else {
        // Fallback
        navigator.clipboard.writeText(`${card.message} - Daily Joy`);
        alert('Message copied to clipboard!');
      }
    } catch (e) {
      console.log('Error sharing', e);
    }
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const response = await fetch(imgSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `daily-joy-${card.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.warn('Download fetch failed, using fallback', e);
      // Fallback for CORS or fetch errors
      window.open(imgSrc, '_blank');
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  return (
    <div className={cn("flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-orange-50/50", featured ? "w-full" : "w-full max-w-md mx-auto")}>
      <div className="relative aspect-[4/5] bg-orange-50 overflow-hidden">
        <img 
          src={imgSrc} 
          alt={card.message}
          loading="lazy"
          onError={() => {
            if (!imgError) {
              console.warn(`Image failed to load: ${card.image}`);
              setImgError(true);
              setImgSrc(`https://picsum.photos/seed/${card.id}/800/1000`);
            }
          }}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-amber-800 shadow-sm">
            Today's Joy ✨
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <p className={cn("text-gray-800 font-medium mb-6", featured ? "text-xl leading-relaxed text-center" : "text-lg")}>
          "{card.message}"
        </p>
        
        <div className="flex items-center justify-between gap-3 mt-auto pt-2">
          <button 
            onClick={toggleSave}
            className={cn(
              "flex-1 flex flex-col items-center justify-center py-3 rounded-2xl transition",
              saved ? "bg-red-50 text-red-600" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            )}
            aria-label={saved ? "Remove from saved" : "Save"}
          >
            <Heart className={cn("w-6 h-6 mb-1", saved && "fill-current")} />
            <span className="text-xs font-semibold">{saved ? 'Saved' : 'Save'}</span>
          </button>
          
          <button 
            onClick={handleShare}
            className="flex-1 flex flex-col items-center justify-center py-3 rounded-2xl bg-gray-50 text-gray-700 hover:bg-gray-100 transition"
            aria-label="Share"
          >
            <Share className="w-6 h-6 mb-1" />
            <span className="text-xs font-semibold">Share</span>
          </button>
          
          <button 
            onClick={handleDownload}
            disabled={downloading}
            className="flex-1 flex flex-col items-center justify-center py-3 rounded-2xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition disabled:opacity-50"
            aria-label="Download"
          >
            {downloading ? <Check className="w-6 h-6 mb-1" /> : <Download className="w-6 h-6 mb-1" />}
            <span className="text-xs font-semibold">{downloading ? 'Done' : 'Download'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
