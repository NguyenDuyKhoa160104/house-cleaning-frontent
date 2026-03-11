import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, BarChart2 } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend, trendUp }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
            </div>
            <div className={`p-3 rounded-lg ${trendUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                <Icon size={24} />
            </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
            {trendUp ? (
                <TrendingUp size={16} className="text-green-500 mr-1" />
            ) : (
                <TrendingDown size={16} className="text-red-500 mr-1" />
            )}
            <span className={trendUp ? 'text-green-500 font-medium' : 'text-red-500 font-medium'}>
                {trend}
            </span>
            <span className="text-gray-400 ml-2">so với tháng trước</span>
        </div>
    </div>
);

const RecentOrders = () => {
    const orders = [
        { id: '#ORD-001', customer: 'Nguyễn Văn A', date: '07/03/2026', amount: '1,250,000đ', status: 'Hoàn thành' },
        { id: '#ORD-002', customer: 'Trần Thị B', date: '07/03/2026', amount: '850,000đ', status: 'Đang xử lý' },
        { id: '#ORD-003', customer: 'Lê Văn C', date: '06/03/2026', amount: '2,100,000đ', status: 'Hoàn thành' },
        { id: '#ORD-004', customer: 'Phạm Thị D', date: '06/03/2026', amount: '450,000đ', status: 'Đã hủy' },
        { id: '#ORD-005', customer: 'Hoàng Văn E', date: '05/03/2026', amount: '3,500,000đ', status: 'Hoàn thành' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Hoàn thành': return 'bg-green-100 text-green-700';
            case 'Đang xử lý': return 'bg-blue-100 text-blue-700';
            case 'Đã hủy': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">Đơn hàng gần đây</h2>
                <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Xem tất cả</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                            <th className="px-6 py-4 font-medium">Mã ĐH</th>
                            <th className="px-6 py-4 font-medium">Khách hàng</th>
                            <th className="px-6 py-4 font-medium">Ngày đặt</th>
                            <th className="px-6 py-4 font-medium">Tổng tiền</th>
                            <th className="px-6 py-4 font-medium">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.amount}</td>
                                <td className="px-6 py-4 text-sm">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// ĐÃ SỬA THÀNH EXPORT CONST Ở ĐÂY
export const AdminDashboard = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 flex-1">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Tổng quan hệ thống</h1>
                <p className="text-sm text-gray-500 mt-1">Xin chào, đây là các chỉ số kinh doanh mới nhất hôm nay.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Tổng doanh thu" value="124.500.000đ" icon={DollarSign} trend="+12.5%" trendUp={true} />
                <StatCard title="Đơn hàng mới" value="342" icon={ShoppingCart} trend="+5.2%" trendUp={true} />
                <StatCard title="Khách hàng mới" value="1,250" icon={Users} trend="-1.2%" trendUp={false} />
                <StatCard title="Tỷ lệ chuyển đổi" value="3.24%" icon={BarChart2} trend="+0.8%" trendUp={true} />
            </div>

            <RecentOrders />
        </div>
    );
};