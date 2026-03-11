import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar = () => {
    return (
        <div className="hidden sm:flex items-center bg-gray-50 rounded-full px-4 py-2 w-96 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
            <Search size={18} className="text-gray-400" />
            <input
                type="text"
                placeholder="Tìm mã ca dọn, SĐT khách..."
                className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700 placeholder-gray-400"
            />
        </div>
    );
};