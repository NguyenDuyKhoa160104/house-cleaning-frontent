import React from 'react';
import {
    LayoutDashboard,
    CalendarCheck,
    Users,
    UserCog,
    AlertCircle,
    Wallet,
    Settings,
    LogOut
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const AdminSidebar = () => {
    const location = useLocation();

    const menuItems = [
        { name: 'Tổng quan', icon: LayoutDashboard, path: '/admin/dashboard' },
        { name: 'Quản lý Ca dọn', icon: CalendarCheck, path: '/admin/bookings' },
        { name: 'Thợ dọn dẹp', icon: UserCog, path: '/admin/cleaners' },
        { name: 'Khách hàng', icon: Users, path: '/admin/customers' },
        { name: 'Khiếu nại', icon: AlertCircle, path: '/admin/complaints' },
        { name: 'Tài chính', icon: Wallet, path: '/admin/finance' },
    ];

    return (
        <aside className="fixed left-6 top-24 z-50 flex flex-col gap-5">
            {menuItems.map((item) => {
                const isActive = location.pathname.includes(item.path);
                return (
                    <div key={item.name} className="relative group flex items-center">
                        <Link
                            to={item.path}
                            className={`w-12 h-12 rounded-full bg-white border flex items-center justify-center transition-all duration-200 z-10 relative ${isActive
                                    ? 'border-blue-500 text-blue-600 shadow-md ring-4 ring-blue-50'
                                    : 'border-gray-300 text-gray-600 shadow-sm hover:border-blue-400 hover:text-blue-500 hover:shadow-md'
                                }`}
                        >
                            <item.icon size={20} />
                        </Link>

                        {/* Thẻ tên có hiệu ứng trượt ra (slide-out) */}
                        <div className="absolute left-[calc(100%+1rem)] bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl opacity-0 invisible -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible shadow-lg transition-all duration-300 whitespace-nowrap z-0">
                            {/* Mũi tên nhỏ chĩa về phía icon */}
                            <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white border-l border-b border-gray-200 rotate-45"></div>
                            {item.name}
                        </div>
                    </div>
                );
            })}

            <div className="w-8 h-px bg-gray-300 mx-auto my-2"></div>

            <div className="relative group flex items-center">
                <Link to="/admin/settings" className="w-12 h-12 rounded-full bg-white border border-gray-300 text-gray-600 shadow-sm flex items-center justify-center hover:border-blue-400 hover:text-blue-500 hover:shadow-md transition-all duration-200 z-10 relative">
                    <Settings size={20} />
                </Link>
                <div className="absolute left-[calc(100%+1rem)] bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl opacity-0 invisible -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible shadow-lg transition-all duration-300 whitespace-nowrap z-0">
                    <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white border-l border-b border-gray-200 rotate-45"></div>
                    Cài đặt
                </div>
            </div>

            <div className="relative group flex items-center">
                <button className="w-12 h-12 rounded-full bg-white border border-gray-300 text-gray-600 shadow-sm flex items-center justify-center hover:border-red-400 hover:text-red-500 hover:shadow-md transition-all duration-200 z-10 relative">
                    <LogOut size={20} />
                </button>
                <div className="absolute left-[calc(100%+1rem)] bg-white border border-red-200 text-red-600 text-sm font-semibold px-4 py-2.5 rounded-xl opacity-0 invisible -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible shadow-lg transition-all duration-300 whitespace-nowrap z-0">
                    <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white border-l border-b border-red-200 rotate-45"></div>
                    Đăng xuất
                </div>
            </div>
        </aside>
    );
};