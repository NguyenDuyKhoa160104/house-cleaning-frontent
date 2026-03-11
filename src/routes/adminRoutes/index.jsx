import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// Wrapper chính cho toàn bộ phần Admin, chứa Header, Footer, Sidebar (nếu có)
import { AdminWrapper } from '../../layouts/wrappers/index_admin.jsx';
// Các trang con của Admin
import { AdminDashboard } from '../../pages/admin/Dashboard/index.jsx';
import { AdminLogin } from '../../pages/admin/AdminLogin/index.jsx';
import { StaffManager } from '../../pages/admin/StaffManager/index.jsx';
// Guard: Yêu cầu đăng nhập
const RequireAdmin = () => {
    const token = localStorage.getItem('admin_token');
    return token ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

// Guard: Đã đăng nhập thì chặn vào Login
const RequireGuest = () => {
    const token = localStorage.getItem('admin_token');
    return token ? <Navigate to="/admin/dashboard" replace /> : <Outlet />;
};

export const adminRoutes = [
    {
        element: <RequireGuest />,
        children: [
            {
                path: '/admin/login',
                element: <AdminLogin />
            }
        ]
    },
    {
        path: '/admin',
        element: <RequireAdmin />,
        children: [
            {
                path: '',
                element: <AdminWrapper />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="dashboard" replace />
                    },
                    {
                        path: 'dashboard',
                        element: <AdminDashboard />
                    },
                    {
                        path: 'staffs',
                        element: <StaffManager />
                    }
                    // Thêm các route khác ở đây...
                ]
            }
        ]
    }
];