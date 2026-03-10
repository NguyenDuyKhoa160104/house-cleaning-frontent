import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FileQuestion, ArrowLeft } from 'lucide-react';

export default function App() {
    const navigate = useNavigate();

    // Hàm xử lý nút quay lại (Có thể thay thế bằng useNavigate của react-router-dom trong dự án thực tế)
    const handleBackHome = () => {
        navigate('/')
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center h-screen w-full p-8 text-center bg-gray-50">
            <div className="bg-blue-50 text-blue-600 p-6 rounded-full mb-8 shadow-sm">
                <FileQuestion size={80} strokeWidth={1.5} />
            </div>

            <h1 className="text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">404</h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Không tìm thấy trang</h2>

            <p className="text-gray-500 mb-8 max-w-md text-base sm:text-lg">
                Xin lỗi, trang bạn đang tìm kiếm không tồn tại, đã bị đổi tên hoặc tạm thời không thể truy cập.
            </p>

            <button
                onClick={handleBackHome}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
                <ArrowLeft size={20} />
                Quay lại Trang chủ
            </button>
        </div>
    );
}