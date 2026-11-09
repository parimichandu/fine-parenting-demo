import React from 'react';

export const LeafIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-sage" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19.5 4.5C14.5 4 6 8.5 4.5 19.5C8 19.5 16.5 17 19.5 4.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 19.5C9 15 13.5 11 19.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BotanicalBranch: React.FC<{ className?: string }> = ({ className = "w-32 h-16 text-sage/40" }) => (
  <svg
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 25C25 22 55 18 115 15"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M25 24C28 17 38 16 39 21C35 24 28 25 25 24Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M45 22C49 14 60 14 60 19C56 22 48 23 45 22Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M70 20C75 11 88 12 87 18C81 20 74 20 70 20Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M38 23C36 30 26 32 23 27C27 24 34 23 38 23Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M60 21C60 28 50 31 46 25C51 23 57 21 60 21Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M86 19C88 26 77 28 73 23C78 20 83 19 86 19Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

export const GoldDivider: React.FC<{ className?: string; label?: string }> = ({ className = "my-6", label }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-gold/80 flex-1 max-w-[120px]"></div>
    {label ? (
      <span className="text-xs uppercase tracking-widest text-gold font-medium px-2">{label}</span>
    ) : (
      <div className="flex items-center gap-1.5 text-gold">
        <span className="w-1.5 h-1.5 rotate-45 border border-gold bg-gold/20"></span>
        <span className="w-2 h-2 rotate-45 bg-gold"></span>
        <span className="w-1.5 h-1.5 rotate-45 border border-gold bg-gold/20"></span>
      </div>
    )}
    <div className="h-px bg-gradient-to-l from-transparent via-gold/50 to-gold/80 flex-1 max-w-[120px]"></div>
  </div>
);

