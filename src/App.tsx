import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { BottomNavigation } from './components/BottomNavigation';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Saved } from './pages/Saved';
import { Settings } from './pages/Settings';
import { CategoryDetail } from './pages/CategoryDetail';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="bg-[#FDFBF7] min-h-screen font-sans selection:bg-amber-100 selection:text-amber-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
