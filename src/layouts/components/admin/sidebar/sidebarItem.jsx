import React from 'react';
import { Link } from 'react-router-dom';

export const SidebarItem = ({ item, isActive, onClick }) => (
    <div className="relative group flex items-center">
        <Link
            to={item.path}
            onClick={onClick}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border ${isActive
                    ? 'bg-white border-blue-500 text-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.15)] ring-4 ring-blue-50'
                    : 'bg-white border-slate-100 text-slate-400 hover:border-blue-200 hover:text-blue-400'
                }`}
        >
            <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
        </Link>

        {/* Ghost Tooltip - Chỉ hiện trên PC */}
        <div className="hidden lg:block absolute left-[calc(100%+1.2rem)] 
            bg-white/70 backdrop-blur-md border border-white 
            text-slate-700 text-[10px] font-black uppercase tracking-[0.1em] 
            px-4 py-2.5 rounded-xl shadow-xl
            opacity-0 invisible -translate-x-3 
            group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible 
            transition-all duration-300 whitespace-nowrap z-0 select-none"
        >
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2.5 h-2.5 bg-white/70 backdrop-blur-md rotate-45 border-l border-b border-white"></div>
            {item.name}
        </div>
    </div>
);