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

            {/* SỬA TẠI ĐÂY: 
                - pl-4: Mặc định cho mobile (cực gọn)
                - lg:pl-[110px]: Chỉ khi màn hình lớn mới chừa chỗ cho Sidebar icon
                - pr-4 lg:pr-8: Tối ưu khoảng cách lề phải
            */}
            <main className="pt-20 lg:pt-24 pl-4 pr-4 lg:pl-[110px] lg:pr-8 pb-8 min-h-screen flex flex-col transition-all duration-300">

                {/* p-4 cho mobile, p-6 cho PC để tiết kiệm diện tích tối đa 
                */}
                <div className="bg-white flex-1 rounded-[2rem] lg:rounded-2xl shadow-sm border border-gray-100 p-4 lg:p-6 overflow-hidden">
                    <Outlet />
                </div>

                <AdminFooter />
            </main>
        </div>
    );
};