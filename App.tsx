
import React from 'react';
import { GeneratorCard } from './components/GeneratorCard';
import { LocationGenerator } from './components/LocationGenerator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-sm">
      <div className="w-full max-w-5xl animate-fade-in">
        <header className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl mb-2">
            Neon<span className="text-neonBlue filter drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">Key</span>
          </h1>
          <p className="text-white/60 text-lg font-light tracking-wide">
            Secure Identity & Location System
          </p>
        </header>
        
        <main className="flex flex-col md:flex-row gap-6 items-start justify-center w-full">
          <div className="w-full md:w-1/2 flex-1">
            <GeneratorCard />
          </div>
          <div className="w-full md:w-1/2 flex-1">
             <LocationGenerator />
          </div>
        </main>

        <footer className="mt-12 text-center text-white/30 text-xs font-mono">
          <p className="mb-2">SECURE • RANDOM • LOCAL</p>
          <p>© {new Date().getFullYear()} NeonKey System</p>
        </footer>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
