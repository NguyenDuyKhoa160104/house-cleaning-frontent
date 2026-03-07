import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../../layouts/components/admin/sidebar/index.jsx';
import AdminHeader from '../../layouts/components/admin/header/index.jsx';
import AdminFooter from '../../layouts/components/admin/footer/index.jsx';

export default function AdminWrapper() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex h-screen bg-gray-50 font-sans">
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader toggleSidebar={toggleSidebar} />

                <div className="flex-1 overflow-auto flex flex-col">
                    {/* Outlet sẽ tự động render AdminDashboard hoặc các page khác tuỳ thuộc vào URL */}
                    <div className="flex-1">
                        <Outlet />
                    </div>

                    <AdminFooter />
                </div>
            </main>
        </div>
    );
}