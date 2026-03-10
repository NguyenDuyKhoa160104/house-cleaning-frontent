import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '../components/admin/sidebar/index.jsx';
import { AdminHeader } from '../components/admin/header/index.jsx';
import { AdminFooter } from '../components/admin/footer/index.jsx';

export const AdminWrapper = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <AdminHeader />
            <AdminSidebar />

            {/* main chừa khoảng trống pt-24 (tránh header) và pl-28 (tránh icon bên trái) */}
            <main className="pt-24 pl-[110px] pr-8 pb-8 min-h-screen flex flex-col">
                <div className="bg-white flex-1 rounded-2xl shadow-sm border border-gray-100 p-6">
                    <Outlet />
                </div>

                <AdminFooter />
            </main>
        </div>
    );
};