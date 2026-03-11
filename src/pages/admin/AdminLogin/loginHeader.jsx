import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const LoginHeader = () => {
    return (
        <>
            <div className="flex justify-center mb-8">
                <img
                    src="https://placehold.co/200x60/ffffff/2563eb?text=ADMIN+LOGO"
                    alt="CleanPro Admin Logo"
                    className="h-12 w-auto object-contain"
                />
            </div>
            <div className="text-center mb-8">
                <div className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <ShieldCheck size={28} />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">Cổng Quản Trị Hệ Thống</h2>
                <p className="text-slate-500 text-sm mt-2">Vui lòng đăng nhập bằng tài khoản nội bộ</p>
            </div>
        </>
    );
};