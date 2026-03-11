import React from 'react';
import { Search, UserPlus, ShieldCheck, Users } from 'lucide-react';

export const StaffHeader = ({ searchTerm, setSearchTerm, activeTab, setActiveTab, onAddClick }) => {
    return (
        <div className="mb-6 flex flex-col gap-4">
            {/* Dòng 1: Tiêu đề và Nút thêm (Gộp lại một hàng) */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                    Nhân sự
                    <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        {activeTab === 'MANAGER' ? 'Quản lý' : 'Nhân viên'}
                    </span>
                </h2>

                <button
                    onClick={onAddClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 sm:px-4 sm:py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-sm"
                >
                    <UserPlus size={16} />
                    <span className="hidden sm:inline">Thêm mới</span>
                </button>
            </div>

            {/* Dòng 2: Search và Tab Switch (Nằm ngang nhau để tiết kiệm chiều dọc) */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
                {/* Bộ lọc Tab mini */}
                <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 w-full sm:w-auto">
                    <button
                        onClick={() => setActiveTab('MANAGER')}
                        className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'MANAGER' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        Quản lý
                    </button>
                    <button
                        onClick={() => setActiveTab('STAFF')}
                        className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'STAFF' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        Nhân viên
                    </button>
                </div>

                {/* Ô tìm kiếm gọn nhẹ */}
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input
                        type="text"
                        placeholder="Tìm nhanh..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:border-blue-500 outline-none transition-all shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
};