

import React, { useState } from 'react';
import { USA_DATA, ALL_STATES, CityData } from '../constants';

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const CityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
);

export const LocationGenerator: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal States
  const [activeModal, setActiveModal] = useState<'none' | 'state' | 'city'>('none');
  
  const [usageTracker, setUsageTracker] = useState<Record<string, number>>({});
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  const HIGH_POPULATION_THRESHOLD = 250000;

  const handleCopy = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    
    setUsageTracker(prev => ({
      ...prev,
      [text]: (prev[text] || 0) + 1
    }));

    setCopyFeedback(text);
    setTimeout(() => setCopyFeedback(null), 1500);
  };

  const getCities = (stateName: string): CityData[] => {
    // Sort cities alphabetically for easier finding
    const cities = USA_DATA[stateName] || [];
    return [...cities].sort((a, b) => a.name.localeCompare(b.name));
  };

  const closeModal = () => {
    setActiveModal('none');
    setSearchQuery('');
  };

  const renderModalContent = () => {
    if (activeModal === 'none') return null;

    const isStateSelection = activeModal === 'state';
    const title = isStateSelection ? 'Select a State' : `Select City in ${selectedState}`;
    
    let items: any[] = [];
    if (isStateSelection) {
      items = ALL_STATES.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    } else if (selectedState) {
      items = getCities(selectedState).filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        ></div>
        
        {/* Modal Card */}
        <div className="relative bg-[#0f172a] border border-white/20 w-full max-w-md max-h-[80vh] rounded-2xl shadow-2xl flex flex-col animate-scale-in overflow-hidden">
           
           {/* Header */}
           <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between sticky top-0 z-10">
             <h3 className="text-white font-bold text-lg">{title}</h3>
             <button onClick={closeModal} className="text-white/50 hover:text-white p-1">
               <CloseIcon />
             </button>
           </div>

           {/* Search */}
           <div className="p-4 border-b border-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder={isStateSelection ? "Search states..." : "Search cities..."}
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-neonBlue transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <div className="absolute left-3.5 top-3.5 text-white/40">
                  <SearchIcon />
                </div>
              </div>
           </div>

           {/* List */}
           <div className="overflow-y-auto flex-1 p-2 custom-scrollbar">
             {items.length === 0 && (
               <div className="text-center py-8 text-white/30">No results found</div>
             )}
             
             {items.map((item) => {
               const name = isStateSelection ? item : item.name;
               const pop = isStateSelection ? 0 : item.pop;
               const usedCount = usageTracker[name] || 0;
               const isHighPop = !isStateSelection && pop > HIGH_POPULATION_THRESHOLD;

               return (
                 <div 
                    key={name}
                    className="flex items-center justify-between p-3 mb-1 rounded-xl hover:bg-white/5 cursor-pointer group transition-all border border-transparent hover:border-white/10"
                    onClick={() => {
                      if (isStateSelection) {
                        setSelectedState(name);
                        setSelectedCity(null);
                      } else {
                        setSelectedCity(name);
                      }
                      closeModal();
                    }}
                 >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                       {isStateSelection && (
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
                            alt="Flag" 
                            className="w-6 h-4 object-cover rounded shadow-sm opacity-90"
                          />
                       )}
                       <div className="flex flex-col">
                          <span className="text-white font-medium truncate flex items-center gap-2">
                             {name}
                             {isHighPop && (
                                <span className="text-[9px] bg-neonPurple/20 text-neonPurple border border-neonPurple/30 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider whitespace-nowrap">
                                  Most Pop
                                </span>
                             )}
                          </span>
                          {usedCount > 0 && (
                             <span className="text-[10px] text-white/50">
                               Used {usedCount} {usedCount === 1 ? 'time' : 'times'}
                             </span>
                          )}
                       </div>
                    </div>

                    <button 
                       onClick={(e) => handleCopy(name, e)}
                       className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-neonBlue hover:bg-neonBlue/10 transition-colors opacity-0 group-hover:opacity-100"
                       title="Copy"
                    >
                       {copyFeedback === name ? <CheckIcon /> : <CopyIcon />}
                    </button>
                 </div>
               );
             })}
           </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] w-full h-full relative overflow-hidden ring-1 ring-white/10 hover:ring-neonPurple/30 transition-all duration-500 flex flex-col">
       
       <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
         <span className="text-neonPurple drop-shadow-[0_0_8px_rgba(188,19,254,0.6)]">USA</span> Location
       </h3>

       <div className="flex-1 flex flex-col justify-center gap-6">
          
          {/* State Button */}
          <button 
             onClick={() => setActiveModal('state')}
             className="relative group w-full p-5 bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 border border-white/10 hover:border-neonBlue/50 rounded-2xl transition-all duration-300 flex items-center gap-4 text-left shadow-lg overflow-hidden"
          >
             <div className="absolute inset-0 bg-neonBlue/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
             
             <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-neonBlue border border-white/10 group-hover:scale-110 transition-transform">
                <MapPinIcon />
             </div>
             
             <div className="flex-1 relative z-10">
                <span className="block text-xs text-white/40 uppercase tracking-widest font-semibold mb-1">State</span>
                <span className={`block text-xl font-bold ${selectedState ? 'text-white' : 'text-white/30 italic'}`}>
                   {selectedState || "Select State"}
                </span>
             </div>
             
             {selectedState && (
               <div 
                 className="relative z-10 p-2 text-white/30 hover:text-white"
                 onClick={(e) => handleCopy(selectedState, e)}
               >
                 {copyFeedback === selectedState ? <CheckIcon /> : <CopyIcon />}
               </div>
             )}
          </button>

          {/* City Button */}
          <button 
             onClick={() => {
                if(selectedState) setActiveModal('city');
             }}
             disabled={!selectedState}
             className={`relative group w-full p-5 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl transition-all duration-300 flex items-center gap-4 text-left shadow-lg overflow-hidden
               ${!selectedState ? 'opacity-50 cursor-not-allowed' : 'hover:from-white/10 hover:to-white/5 hover:border-neonPurple/50 cursor-pointer'}
             `}
          >
             <div className="absolute inset-0 bg-neonPurple/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
             
             <div className={`w-12 h-12 rounded-full bg-black/40 flex items-center justify-center border border-white/10 transition-transform ${selectedState ? 'text-neonPurple group-hover:scale-110' : 'text-white/20'}`}>
                <CityIcon />
             </div>
             
             <div className="flex-1 relative z-10">
                <span className="block text-xs text-white/40 uppercase tracking-widest font-semibold mb-1">City</span>
                <span className={`block text-xl font-bold ${selectedCity ? 'text-white' : 'text-white/30 italic'}`}>
                   {selectedCity || (selectedState ? "Select City" : "State Required")}
                </span>
             </div>

             {selectedCity && (
               <div 
                 className="relative z-10 p-2 text-white/30 hover:text-white"
                 onClick={(e) => handleCopy(selectedCity, e)}
               >
                 {copyFeedback === selectedCity ? <CheckIcon /> : <CopyIcon />}
               </div>
             )}
          </button>

       </div>

       {/* Render Modal if active */}
       {renderModalContent()}

       <style>{`
         .custom-scrollbar::-webkit-scrollbar {
           width: 4px;
         }
         .custom-scrollbar::-webkit-scrollbar-track {
           background: rgba(255, 255, 255, 0.02);
         }
         .custom-scrollbar::-webkit-scrollbar-thumb {
           background: rgba(255, 255, 255, 0.1);
           border-radius: 4px;
         }
         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
           background: rgba(255, 255, 255, 0.2);
         }
         @keyframes scaleIn {
           from { transform: scale(0.95); opacity: 0; }
           to { transform: scale(1); opacity: 1; }
         }
         .animate-scale-in {
           animation: scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
         }
       `}</style>
    </div>
  );
};
