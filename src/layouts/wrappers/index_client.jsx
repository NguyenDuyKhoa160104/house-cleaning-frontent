import React from 'react';
import { Outlet } from 'react-router-dom';
import { ClientHeader } from '../components/client/header/index.jsx'; // Nhớ sửa đường dẫn cho đúng
import { ClientFooter } from '../components/client/footer/index.jsx'; // Nhớ sửa đường dẫn cho đúng

export const ClientWrapper = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
            <ClientHeader />
            
            {/* Main content đẩy xuống 80px (pt-20) để tránh bị Header fixed đè lên nội dung */}
            <main className="flex-1 pt-20 flex flex-col">
                <Outlet />
            </main>
            
            <ClientFooter />
        </div>
    );
};