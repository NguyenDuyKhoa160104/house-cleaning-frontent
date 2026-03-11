import React from 'react';

export const RightBanner = () => {
    return (
        <div className="hidden lg:flex lg:w-1/2 relative bg-blue-900 overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                alt="Admin Dashboard"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/80 to-transparent"></div>

            <div className="relative z-10 flex flex-col justify-end p-16 h-full text-white">
                <div className="w-16 h-1 bg-blue-500 mb-6 rounded-full"></div>
                <h2 className="text-4xl font-extrabold mb-4 leading-tight">
                    Kiểm soát toàn diện <br /> Hệ thống CleanPro
                </h2>
                <p className="text-blue-100 text-lg max-w-lg leading-relaxed mb-12">
                    Theo dõi chỉ số doanh thu, quản lý đội ngũ dọn dẹp và kiểm soát chất lượng dịch vụ ở quy mô lớn chỉ với vài thao tác đơn giản.
                </p>
            </div>
        </div>
    );
};