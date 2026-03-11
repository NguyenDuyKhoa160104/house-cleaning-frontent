import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo.jsx';
import { SearchBar } from './searchbar.jsx';
import { UserProfile } from './userProfile.jsx';

export const AdminHeader = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    // Lấy thông tin User trực tiếp từ bộ nhớ (Nhanh, gọn, không cần gọi API)
    useEffect(() => {
        const info = localStorage.getItem('admin_info');
        if (info) {
            setUserData(JSON.parse(info));
        }
    }, []);

    // Xử lý đăng xuất: Xóa bộ nhớ và đá ra Login
    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_info');
        navigate('/admin/login', { replace: true });
    };

    return (
        <header className="fixed top-0 inset-x-0 z-40 h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6">
            <Logo />
            <SearchBar />
            <div className="flex items-center gap-4">
                <UserProfile
                    userData={userData}
                    isLoading={false} // Bỏ loading luôn vì lấy từ localStorage ra cực nhanh
                    onLogout={handleLogout}
                />
            </div>
        </header>
    );
};