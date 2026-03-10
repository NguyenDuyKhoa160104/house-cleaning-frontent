import React from 'react';
import { Link } from 'react-router-dom';

export const ClientFooter = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 text-sm mt-auto border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src="https://placehold.co/60x60/2563eb/fff?text=C"
                            alt="CleanPro Logo"
                            className="w-10 h-10 object-contain rounded-xl shadow-lg border-2 border-blue-500/50"
                        />
                        <span className="font-bold text-xl text-white">CleanPro</span>
                    </div>
                    <p className="max-w-xs leading-relaxed">Nền tảng kết nối dịch vụ dọn dẹp nhà cửa hàng đầu, mang đến không gian sống sạch sẽ và tiện nghi.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Dịch vụ</h4>
                    <ul className="space-y-3">
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">Dọn dẹp tiêu chuẩn</Link></li>
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">Tổng vệ sinh</Link></li>
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">Vệ sinh sofa/đệm</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Hỗ trợ</h4>
                    <ul className="space-y-3">
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">Trung tâm trợ giúp</Link></li>
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">Điều khoản & Bảo mật</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center">
                <p>&copy; {new Date().getFullYear()} CleanPro. Đã đăng ký bản quyền.</p>
            </div>
        </footer>
    );
};