import React from 'react';
import { Home, Users, ShoppingCart, BarChart2, Settings, X, Package } from 'lucide-react';

export default function AdminSidebar({ isSidebarOpen, toggleSidebar }) {
    const menuItems = [
        { name: 'Tổng quan', icon: Home, active: true },
        { name: 'Khách hàng', icon: Users, active: false },
        { name: 'Sản phẩm', icon: Package, active: false },
        { name: 'Đơn hàng', icon: ShoppingCart, active: false },
        { name: 'Báo cáo', icon: BarChart2, active: false },
        { name: 'Cài đặt', icon: Settings, active: false },
    ];

    return (
        <aside
            className={`fixed inset-y-0 left-0 bg-gray-900 text-white w-64 z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="flex items-center justify-between h-16 px-6 bg-gray-950">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 p-1.5 rounded-lg">
                        <BarChart2 size={20} className="text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Admin<span className="text-blue-400">Pro</span></span>
                </div>
                <button onClick={toggleSidebar} className="lg:hidden text-gray-400 hover:text-white">
                    <X size={24} />
                </button>
            </div>

            <div className="p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">Menu chính</p>
                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href="#"
                            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${item.active
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                }`}
                        >
                            <item.icon size={20} className={`mr-3 ${item.active ? 'text-white' : 'text-gray-400'}`} />
                            <span className="font-medium">{item.name}</span>
                        </a>
                    ))}
                </nav>
            </div>

            {/* Phần user ở dưới cùng sidebar */}
            <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
                <div className="flex items-center gap-3 px-2">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-2 border-gray-600">
                        <span className="text-sm font-bold">AD</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white">Quản trị viên</p>
                        <p className="text-xs text-gray-400">admin@example.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}