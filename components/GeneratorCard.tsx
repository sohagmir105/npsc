import React, { useState, useEffect } from 'react';
import { MALE_NAMES, FEMALE_NAMES, LAST_NAMES } from '../constants';
import { IdentityData } from '../types';

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

type GenderOption = 'random' | 'male' | 'female';

export const GeneratorCard: React.FC = () => {
  const [identity, setIdentity] = useState<IdentityData | null>(null);
  const [copied, setCopied] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [genderPreference, setGenderPreference] = useState<GenderOption>('random');

  const generateIdentity = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);

    let isMale: boolean;
    if (genderPreference === 'random') {
      isMale = Math.random() > 0.5;
    } else {
      isMale = genderPreference === 'male';
    }
    
    const gender = isMale ? 'Male' : 'Female';
    
    const firstNames = isMale ? MALE_NAMES : FEMALE_NAMES;
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    const fullName = `${firstName} ${lastName}`;

    // Password Logic: @EThAnWaLLace#9821$
    const symbols = "!@#$%&*?";
    const prefix = symbols[Math.floor(Math.random() * symbols.length)];
    const suffix1 = symbols[Math.floor(Math.random() * symbols.length)];
    const suffix2 = symbols[Math.floor(Math.random() * symbols.length)];
    const numbers = Math.floor(1000 + Math.random() * 9000).toString();

    // Mixed case conversion
    const cleanName = fullName.replace(/\s/g, '');
    const mixedCaseName = cleanName.split('').map(char => 
      Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
    ).join('');

    const password = `${prefix}${mixedCaseName}${suffix1}${numbers}${suffix2}`;

    setIdentity({
      firstName,
      lastName,
      fullName,
      gender,
      password
    });
    setCopied(false);
  };

  useEffect(() => {
    generateIdentity();
  }, [genderPreference]);

  const handleCopy = () => {
    if (identity?.password) {
      navigator.clipboard.writeText(identity.password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!identity) return <div className="text-white text-center font-mono animate-pulse">Initializing Secure Core...</div>;

  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] w-full relative overflow-hidden ring-1 ring-white/10 hover:ring-neonBlue/30 transition-all duration-500">
       {/* Top decorative gradient line */}
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonBlue to-neonPurple shadow-[0_0_15px_rgba(0,243,255,0.6)]"></div>

       {/* Gender Selector */}
       <div className="mb-8 p-1 bg-black/40 backdrop-blur-md rounded-xl flex justify-between items-center border border-white/10 shadow-inner">
         {(['random', 'male', 'female'] as const).map((type) => (
           <button
             key={type}
             onClick={() => setGenderPreference(type)}
             className={`flex-1 py-2 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
               genderPreference === type
                 ? 'bg-white/10 text-neonBlue shadow-[0_0_10px_rgba(0,243,255,0.1)] border border-white/20'
                 : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'
             }`}
           >
             {type}
           </button>
         ))}
       </div>

       <div className={`transition-all duration-300 ${animate ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'}`}>
         {/* Name Display */}
         <div className="text-center mb-8">
           <div className="flex items-center justify-center gap-2 mb-3">
             <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm ${
               identity.gender === 'Male' 
                 ? 'bg-blue-500/20 border-blue-400/30 text-blue-200 shadow-blue-500/10' 
                 : 'bg-pink-500/20 border-pink-400/30 text-pink-200 shadow-pink-500/10'
             }`}>
               {identity.gender}
             </span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight">
             {identity.fullName}
           </h2>
         </div>

         {/* Password Display */}
         <div className="mb-8">
            <div className="bg-black/40 rounded-2xl p-1 border border-white/10 hover:border-neonBlue/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-neonBlue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="flex flex-col items-center justify-center py-6 px-4">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2 font-semibold">Generated Password</p>
                <p className="font-mono text-2xl md:text-3xl text-neonBlue font-bold tracking-wide break-all text-center selection:bg-neonBlue selection:text-black drop-shadow-[0_0_5px_rgba(0,243,255,0.3)]">
                  {identity.password}
                </p>
              </div>

              <button 
                onClick={handleCopy}
                className="absolute right-2 top-2 p-2 rounded-xl hover:bg-white/10 text-white/50 hover:text-white transition-colors active:scale-90"
                title="Copy to clipboard"
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
            {copied && (
              <div className="absolute left-0 right-0 flex justify-center -bottom-6">
                 <span className="text-neonBlue text-xs font-bold px-2 py-0.5 bg-black/50 rounded border border-neonBlue/30 animate-bounce">
                   COPIED!
                 </span>
              </div>
            )}
         </div>
       </div>

       {/* Controls */}
       <div className="flex flex-col gap-3">
         <button 
           onClick={generateIdentity}
           className="w-full py-4 bg-gradient-to-r from-neonBlue to-[#00c3ff] hover:from-[#33f6ff] hover:to-[#33d6ff] text-black font-extrabold rounded-xl shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-2 text-lg uppercase tracking-wide"
         >
           <RefreshIcon />
           Generate {genderPreference === 'random' ? '' : genderPreference} Identity
         </button>
         
         <button 
           onClick={generateIdentity}
           className="w-full py-3 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white font-semibold rounded-xl border border-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
         >
           Generate Another
         </button>
       </div>
    </div>
  );
};
