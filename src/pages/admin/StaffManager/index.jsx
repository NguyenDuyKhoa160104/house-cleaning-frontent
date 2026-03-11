import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// Import các thành phần giao diện
import { StaffHeader } from './staffHeader.jsx';
import { StaffCards } from './staffCards.jsx';
import { AddStaffModal } from './addStaffModal.jsx';

export const StaffManager = () => {
    // 1. Quản lý danh sách và trạng thái tải
    const [staffs, setStaffs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // 2. Quản lý bộ lọc (Từ khóa & Tab vai trò)
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('MANAGER');

    // 3. Quản lý trạng thái đóng/mở Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Hàm gọi API lấy danh sách nhân sự
    const fetchStaffs = async () => {
        setIsLoading(true);
        try {
            const baseUrl = import.meta.env.VITE_API_ADMIN_URL?.replace(/\/$/, '') || '';
            const token = localStorage.getItem('admin_token');

            const response = await fetch(`${baseUrl}/get-all-staffs`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();
            if (result.success) {
                setStaffs(result.data);
            } else {
                toast.error(result.message || 'Không thể tải danh sách');
            }
        } catch (error) {
            console.error("Lỗi fetch staff:", error);
            toast.error('Lỗi kết nối máy chủ');
        } finally {
            setIsLoading(false);
        }
    };

    // Tự động tải dữ liệu khi vào trang
    useEffect(() => {
        fetchStaffs();
    }, []);

    // Logic lọc dữ liệu kép: Theo Tab trước, sau đó theo Từ khóa
    const filteredStaffs = staffs.filter(s => {
        const matchTab = s.role === activeTab;
        const matchSearch = s.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.phoneNumber.includes(searchTerm);
        return matchTab && matchSearch;
    });

    return (
        <div className="p-8 max-w-[1440px] mx-auto animate-fadeIn relative">
            {/* Cổng hiện thông báo toast */}
            <Toaster position="top-right" reverseOrder={false} />

            {/* Thanh công cụ: Tiêu đề, Tìm kiếm, Chuyển Tab và Nút Thêm */}
            <StaffHeader
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onAddClick={() => setIsModalOpen(true)}
            />

            {/* Hiển thị danh sách dưới dạng thẻ (Cards) */}
            <StaffCards
                staffList={filteredStaffs}
                isLoading={isLoading}
            />

            {/* Modal thêm nhân sự mới */}
            <AddStaffModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={fetchStaffs} // Gọi lại danh sách khi tạo thành công
            />
        </div>
    );
};