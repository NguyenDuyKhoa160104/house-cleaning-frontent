import React from 'react';
import { Navigate } from 'react-router-dom'; // Thêm dòng này
import { AdminWrapper } from '../../layouts/wrappers/index_admin.jsx';
import AdminDashboard from '../../pages/admin/Dashboard/index.jsx';

export const adminRoutes = [
    {
        path: '/admin',
        element: <AdminWrapper />,
        children: [
            {
                // Khi vào chính xác '/admin', tự động chuyển hướng sang '/admin/dashboard'
                index: true,
                element: <Navigate to="dashboard" replace />
            },
            {
                // Khai báo path 'dashboard'
                path: 'dashboard',
                element: <AdminDashboard />
            },
            // Các trang khác...
            // { path: 'users', element: <AdminUsers /> },
            // { path: 'settings', element: <AdminSettings /> },
        ]
    }
];