import React from 'react';
import { Edit3, Trash2, ShieldCheck, User, Phone } from 'lucide-react';

export const StaffCards = ({ staffList, isLoading, onEdit, onDelete }) => {

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="aspect-[2/2.9] bg-slate-50 animate-pulse rounded-[2rem] border border-slate-100"></div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {staffList.map((staff) => (
                <div
                    key={staff._id}
                    className="group relative aspect-[2/3] bg-white rounded-[2rem] border border-slate-100 transition-all duration-500 flex flex-col hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] hover:border-blue-100"
                >
                    {/* 1. KHUNG ẢNH (Chiếm 60% chiều cao) */}
                    <div className="relative h-[60%] w-full overflow-hidden bg-slate-50">
                        <img
                            src={staff.avatarUrl}
                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            alt={staff.fullName}
                        />
                        {/* Overlay chuyển màu cực nhẹ từ chân ảnh */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

                        {/* Status Badge - Đưa vào một góc gọn gàng */}
                        <div className="absolute top-4 left-4">
                            <div className={`px-2 py-1 rounded-lg backdrop-blur-md border flex items-center gap-1.5 ${staff.status === 'ACTIVE'
                                    ? 'bg-white/80 border-emerald-100 text-emerald-600'
                                    : 'bg-white/80 border-red-100 text-red-600'
                                }`}>
                                <div className={`w-1 h-1 rounded-full ${staff.status === 'ACTIVE' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                                <span className="text-[9px] font-black uppercase tracking-wider">
                                    {staff.status === 'ACTIVE' ? 'Hoạt động' : 'Đã khóa'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 2. PHẦN NỘI DUNG (Căn trái, Typography rõ ràng) */}
                    <div className="flex-1 px-5 pb-5 flex flex-col justify-between">
                        <div className="space-y-1">
                            {/* Vai trò - Nhỏ nhưng nét */}
                            <div className="flex items-center gap-1.5 text-slate-400">
                                {staff.role === 'MANAGER' ? <ShieldCheck size={12} /> : <User size={12} />}
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    {staff.role === 'MANAGER' ? 'Quản trị viên' : 'Nhân viên nội bộ'}
                                </span>
                            </div>

                            {/* Tên - Font to, rõ, đậm chất nhân sự */}
                            <h3 className="font-extrabold text-slate-800 text-lg leading-tight truncate">
                                {staff.fullName}
                            </h3>

                            {/* Số điện thoại - Căn trái với icon nhỏ */}
                            <div className="flex items-center gap-1.5 text-slate-500 pt-1">
                                <Phone size={12} className="text-slate-300" />
                                <span className="text-xs font-medium tabular-nums">
                                    {staff.phoneNumber}
                                </span>
                            </div>
                        </div>

                        {/* 3. BỘ NÚT THAO TÁC (Gọn gàng, không chiếm dụng diện tích) */}
                        <div className="flex items-center gap-2 pt-4">
                            <button
                                onClick={() => onEdit(staff)}
                                className="flex-1 h-9 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-xl flex items-center justify-center gap-2 transition-all font-bold text-xs"
                            >
                                <Edit3 size={14} />
                                <span>Sửa</span>
                            </button>

                            <button
                                onClick={() => onDelete(staff._id)}
                                className="w-9 h-9 bg-slate-50 hover:bg-red-50 text-slate-300 hover:text-red-500 rounded-xl flex items-center justify-center transition-all"
                                title="Xóa"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};