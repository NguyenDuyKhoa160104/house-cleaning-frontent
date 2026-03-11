import React from 'react';
import { Menu, X } from 'lucide-react';

export const MobileTrigger = ({ isOpen, onClick }) => (
    <button 
        onClick={onClick}
        className="lg:hidden fixed bottom-10 right-8 z-[1000] w-14 h-14 bg-white/40 backdrop-blur-xl border border-white/40 rounded-full shadow-2xl flex items-center justify-center text-slate-800 transition-all"
    >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
        {!isOpen && <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping opacity-30" />}
    </button>
);