import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Share, Smartphone, X } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-amber-600 transition"
      >
        <Download className="w-4 h-4" />
        Install App
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-amber-600 transition"
        >
          <Smartphone className="w-4 h-4" />
          Install on iOS
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Install Daily Joy</h3>
              <div className="text-gray-600 text-left space-y-4 mb-8">
                <p className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold">1</span>
                  <span>Tap the <strong>Share</strong> button in Safari <Share className="inline w-4 h-4 ml-1" /></span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold">2</span>
                  <span>Scroll down and tap <strong>Add to Home Screen</strong></span>
                </p>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full rounded-full bg-gray-100 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
