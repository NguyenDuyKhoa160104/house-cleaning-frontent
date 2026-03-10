import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const ClientHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation(); // Dùng để active menu

    // Định nghĩa Menu
    const navItems = [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Về chúng tôi', path: '/about' },
        { name: 'Liên hệ', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

                {/* --- CHỈ ĐỂ IMAGE LOGO (Không có chữ) --- */}
                <Link to="/" className="flex items-center">
                    <img
                        // Link ảnh tạm. Sau này có ảnh thật ông thay link vào src này
                        src="https://via.placeholder.com/150x50?text=CleanPro+Logo"
                        alt="CleanPro Logo"
                        // Chỉnh chiều cao h-10 or h-12 cho vừa Header, w-auto để giữ tỷ lệ
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden md:flex items-center gap-8 font-medium">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`transition-colors ${isActive
                                        ? 'text-blue-600 font-semibold'
                                        : 'text-slate-600 hover:text-blue-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Cụm Nút Đăng nhập/Đăng ký Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                        Đăng nhập
                    </Link>
                    <Link to="/register" className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 shadow-md shadow-blue-500/30 transition-all">
                        Đăng ký
                    </Link>
                </div>

                {/* Nút Hamburger cho Mobile */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 inset-x-0 bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-3 font-medium animate-fadeIn">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)} // Đóng menu khi bấm
                                className={`py-2 px-3 rounded-lg ${isActive
                                        ? 'bg-blue-50 text-blue-600 font-semibold'
                                        : 'text-slate-700 hover:bg-slate-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <hr className="border-gray-100 my-1" />
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-3 text-slate-700 hover:bg-slate-50 rounded-lg">Đăng nhập</Link>
                    <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                        Đăng ký ngay
                    </Link>
                </div>
            )}
        </header>
    );
};