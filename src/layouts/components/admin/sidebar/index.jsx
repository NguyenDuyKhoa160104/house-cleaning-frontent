import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, CalendarCheck, Users, UserCog,
    AlertCircle, Wallet, Settings, LogOut, IdCard
} from 'lucide-react';

import { SidebarItem } from './sidebarItem.jsx';
import { MobileTrigger } from './mobileTrigger.jsx';

export const AdminSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Tổng quan', icon: LayoutDashboard, path: '/admin/dashboard' },
        { name: 'Quản lý Ca dọn', icon: CalendarCheck, path: '/admin/bookings' },
        { name: 'Nhân sự', icon: IdCard, path: '/admin/staffs' },
        { name: 'Thợ dọn dẹp', icon: UserCog, path: '/admin/cleaners' },
        { name: 'Khách hàng', icon: Users, path: '/admin/customers' },
        { name: 'Khiếu nại', icon: AlertCircle, path: '/admin/complaints' },
        { name: 'Tài chính', icon: Wallet, path: '/admin/finance' },
    ];

    const handleLogout = () => {
        localStorage.clear();
        navigate('/admin/login', { replace: true });
    };

    return (
        <>
            <MobileTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

            {/* Overlay đóng menu khi bấm ra ngoài */}
            {isOpen && <div className="lg:hidden fixed inset-0 z-[999]" onClick={() => setIsOpen(false)} />}

            <aside className={`
                fixed transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                lg:z-[50] lg:left-6 lg:top-24 lg:translate-x-0 lg:w-auto lg:h-auto lg:bg-transparent
                max-lg:z-[1001] max-lg:top-6 max-lg:bottom-24 max-lg:right-6 
                max-lg:bg-white/80 max-lg:backdrop-blur-2xl max-lg:rounded-[2.5rem] 
                max-lg:border max-lg:border-white/50 max-lg:shadow-2xl 
                max-lg:flex max-lg:flex-col max-lg:p-5 max-lg:w-20
                ${isOpen ? 'max-lg:translate-x-0' : 'max-lg:translate-x-[150%]'}
            `}>
                <div className="flex flex-col gap-5 items-center">
                    {menuItems.map((item) => (
                        <SidebarItem
                            key={item.name}
                            item={item}
                            isActive={location.pathname.includes(item.path)}
                            onClick={() => setIsOpen(false)}
                        />
                    ))}
                </div>

                <div className="hidden lg:block flex-1 min-h-[40px]"></div>

                <div className="flex flex-col gap-5 items-center mt-auto lg:mt-0">
                    <SidebarItem
                        item={{ name: 'Cài đặt', icon: Settings, path: '/admin/settings' }}
                        isActive={location.pathname.includes('/admin/settings')}
                        onClick={() => setIsOpen(false)}
                    />
                    <button onClick={handleLogout} className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                        <LogOut size={20} />
                    </button>
                </div>
            </aside>
        </>
    );
};