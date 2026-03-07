import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';

export default function AdminHeader({ toggleSidebar }) {
    return (
        <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 shrink-0">
            <div className="flex items-center">
                <button
                    onClick={toggleSidebar}
                    className="p-2 mr-4 rounded-md text-gray-500 hover:bg-gray-100 lg:hidden focus:outline-none"
                >
                    <Menu size={24} />
                </button>

                {/* Thanh tìm kiếm */}
                <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96 focus-within:ring-2 focus-within:ring-blue-500 focus-within:bg-white transition-all">
                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="bg-transparent border-none outline-none ml-2 w-full text-sm text-gray-700 placeholder-gray-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 relative">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="h-8 w-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center cursor-pointer">
                    <span className="text-sm font-bold text-blue-700">AD</span>
                </div>
            </div>
        </header>
    );
}