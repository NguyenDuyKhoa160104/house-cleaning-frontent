import React from 'react';
// Import bộ icon mới chuẩn ngành dịch vụ vệ sinh
import { Sparkles, ShieldCheck, Clock, ArrowRight, Star, Sofa, Brush, SprayCan, Recycle, Blinds, Home as HomeIcon, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
    // Mảng dữ liệu cho các dịch vụ bổ sung (Đã cập nhật Icon mới)
    const extraServices = [
        { name: 'Giặt Thảm', icon: Brush },
        { name: 'Khử Khuẩn', icon: SprayCan },
        { name: 'Dọn Rác', icon: Recycle },
        { name: 'Vệ Sinh Rèm', icon: Blinds },
        { name: 'Dọn Nhà Mới', icon: HomeIcon }, // Dùng HomeIcon để không bị trùng tên với component Home
        { name: 'Lau Kính', icon: Droplets },
    ];

    return (
        <div className="flex-1">
            {/* 1. HERO SECTION (Banner) */}
            <section className="relative bg-blue-600 pt-16 pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between z-10">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                            Thảnh thơi tận hưởng, <br />
                            <span className="text-blue-200">Nhà cửa cứ để CleanPro lo!</span>
                        </h1>
                        <p className="text-lg text-blue-100 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Hệ thống đặt người dọn dẹp nhà cửa uy tín, nhanh chóng chỉ với 3 thao tác.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <Link to="/booking" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                Đặt lịch dọn ngay <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
                        <div className="relative w-full max-w-md">
                            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop" alt="Dọn dẹp" className="rounded-3xl shadow-2xl border-4 border-white/20 object-cover h-[400px] w-full" />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600"><Star size={24} fill="currentColor" /></div>
                                <div><p className="text-sm font-bold text-gray-800">4.9/5</p><p className="text-xs text-gray-500">Đánh giá uy tín</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CHUỖI ICON DỊCH VỤ (Không dùng hộp chứa, đặt tự do) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-2 mb-2">
                <div className="flex items-center justify-center lg:justify-between gap-6 overflow-x-auto no-scrollbar py-4">
                    {extraServices.map((service) => (
                        <div key={service.name} className="flex flex-col items-center gap-3 shrink-0 group cursor-pointer">
                            {/* Icon nền trắng bọc viền mỏng, khi hover sẽ nhích nhẹ lên */}
                            <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 text-slate-600 flex items-center justify-center group-hover:border-blue-400 group-hover:text-blue-600 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                                <service.icon size={26} strokeWidth={1.5} />
                            </div>
                            <span className="text-sm font-semibold text-gray-600 text-center w-24 leading-tight group-hover:text-blue-600 transition-colors">
                                {service.name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. VÌ SAO CHỌN CHÚNG TÔI */}
            <section className="py-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">An tâm giao phó ngôi nhà của bạn</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><ShieldCheck size={32} /></div>
                        <h3 className="text-xl font-bold mb-3">Lý lịch rõ ràng</h3>
                        <p className="text-gray-500">100% người dọn dẹp đều được xác minh danh tính và kiểm tra lý lịch.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Sparkles size={32} /></div>
                        <h3 className="text-xl font-bold mb-3">Chất lượng 5 sao</h3>
                        <p className="text-gray-500">Đào tạo bài bản, chất lượng công việc được đánh giá liên tục.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                        <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Clock size={32} /></div>
                        <h3 className="text-xl font-bold mb-3">Nhanh chóng</h3>
                        <p className="text-gray-500">Chỉ mất 60s để đặt lịch và có người nhận ca ngay lập tức.</p>
                    </div>
                </div>
            </section>

            {/* 4. DỊCH VỤ NỔI BẬT */}
            <section className="py-20 bg-white border-t border-gray-100 relative z-10 mt-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-12 flex justify-between items-center">
                        <h2 className="text-3xl font-bold text-gray-900">Gói dịch vụ chính</h2>
                        <Link to="/services" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
                            Xem tất cả <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Dịch vụ 1 */}
                        <div className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" alt="Dọn dẹp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Dọn dẹp nhà cửa</h3>
                                <p className="text-gray-500 text-sm mb-4">Lau chùi, quét dọn rác, làm sạch nhà vệ sinh, sắp xếp gọn gàng.</p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <span className="text-lg font-extrabold text-gray-900">80.000đ<span className="text-sm font-normal text-gray-500">/giờ</span></span>
                                </div>
                            </div>
                        </div>
                        {/* Dịch vụ 2 */}
                        <div className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=800&auto=format&fit=crop" alt="Sofa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Vệ sinh Sofa / Đệm</h3>
                                <p className="text-gray-500 text-sm mb-4">Làm sạch sâu, hút bụi mịn, tẩy vết bẩn mốc và khử mùi.</p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <span className="text-lg font-extrabold text-gray-900">350.000đ<span className="text-sm font-normal text-gray-500">/bộ</span></span>
                                </div>
                            </div>
                        </div>
                        {/* Dịch vụ 3 */}
                        <div className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1527515637-ed06509f6b5b?q=80&w=800&auto=format&fit=crop" alt="Máy lạnh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Vệ sinh Máy lạnh</h3>
                                <p className="text-gray-500 text-sm mb-4">Bơm gas, xịt rửa dàn lạnh/dàn nóng, kiểm tra an toàn điện.</p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <span className="text-lg font-extrabold text-gray-900">200.000đ<span className="text-sm font-normal text-gray-500">/máy</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};