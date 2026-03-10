import React from 'react';
import { Bell, Search } from 'lucide-react';

export const AdminHeader = () => {
    return (
        <header className="fixed top-0 inset-x-0 z-40 h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6">

            {/* Cụm Logo bằng hình ảnh */}
            <div className="flex items-center w-48">
                <img
                    src="https://placehold.co/120x40/2563eb/white?text=LOGO"
                    alt="Logo placeholder"
                    className="h-9 object-contain rounded"
                />
            </div>

            {/* Thanh tìm kiếm ở giữa */}
            <div className="hidden sm:flex items-center bg-gray-50 rounded-full px-4 py-2 w-96 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                <Search size={18} className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Tìm mã ca dọn, SĐT khách..."
                    className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700 placeholder-gray-400"
                />
            </div>

            {/* Cụm User bên phải */}
            <div className="flex items-center gap-5">
                <button className="relative text-gray-400 hover:text-blue-600 transition-colors">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="flex items-center gap-3 cursor-pointer group">
                    <img
                        src="https://ui-avatars.com/api/?name=Khoa+Nguyen&background=0D8ABC&color=fff"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full border border-gray-200 shadow-sm"
                    />
                </div>
            </div>
        </header>
    );
};