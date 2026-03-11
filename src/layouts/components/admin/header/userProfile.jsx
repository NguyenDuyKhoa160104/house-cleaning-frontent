import React from 'react';
import { Bell, LogOut } from 'lucide-react';

export const UserProfile = ({ userData, isLoading, onLogout }) => {
    // Trạng thái đang tải
    if (isLoading) {
        return (
            <div className="flex items-center gap-3 animate-pulse">
                <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                <div className="w-24 h-4 bg-slate-200 rounded"></div>
            </div>
        );
    }

    // Đã có dữ liệu user
    if (userData) {
        return (
            <>
                <button className="relative text-gray-400 hover:text-blue-600 transition-colors">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                <div className="h-6 w-px bg-gray-200 mx-2"></div>

                <div className="flex items-center gap-3 group">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-gray-800 leading-tight">{userData.fullName}</p>
                        <p className="text-xs font-medium text-blue-600">{userData.role}</p>
                    </div>
                    <img
                        src={userData.avatarUrl && userData.avatarUrl !== "https://default-avatar-link.com/avatar.png" ? userData.avatarUrl : `https://ui-avatars.com/api/?name=${userData.fullName}&background=2563eb&color=fff`}
                        alt="Avatar"
                        className="w-9 h-9 rounded-full border-2 border-transparent group-hover:border-blue-200 transition-all object-cover shadow-sm"
                    />

                    <button
                        onClick={onLogout}
                        title="Đăng xuất"
                        className="ml-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                        <LogOut size={18} />
                    </button>
                </div>
            </>
        );
    }

    // Trạng thái fallback
    return (
        <button className="relative text-gray-300 cursor-not-allowed transition-colors">
            <Bell size={20} />
        </button>
    );
};