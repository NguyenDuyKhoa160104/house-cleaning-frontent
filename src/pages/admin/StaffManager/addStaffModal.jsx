import React, { useState } from 'react';
import { X, User, Phone, Lock, Shield, Key, Loader2, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

export const AddStaffModal = ({ isOpen, onClose, onSuccess }) => {
    // Luồng Step: 1 (Nhập thông tin), 2 (Nhập OTP)
    const [step, setStep] = useState(1);

    // State lưu dữ liệu
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('MANAGER');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    // Reset sạch sẽ khi đóng Modal
    const handleClose = () => {
        setStep(1);
        setFullName(''); setPhoneNumber(''); setRole('MANAGER');
        setPassword(''); setOtp('');
        onClose();
    };

    // ==========================================
    // BƯỚC 1: XỬ LÝ NÚT "TẠO TÀI KHOẢN" -> GỬI OTP
    // ==========================================
    const handleInitialSubmit = async (e) => {
        e.preventDefault();

        if (phoneNumber.length < 9) {
            toast.error('Vui lòng nhập số điện thoại hợp lệ!');
            return;
        }

        setIsLoading(true);
        try {
            const token = localStorage.getItem('admin_token');
            // Thêm dấu '/' cho chắc ăn, tránh lỗi 404
            const baseUrl = import.meta.env.VITE_API_ADMIN_URL?.replace(/\/$/, '') || '';

            const response = await fetch(`${baseUrl}/send-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ phoneNumber })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success('Đã gửi mã OTP đến số điện thoại!');
                setStep(2); // Thành công thì chuyển sang form nhập OTP
            } else {
                toast.error(data.message || 'Không thể gửi mã OTP');
            }
        } catch (error) {
            console.error('Lỗi send OTP:', error);
            toast.error('Lỗi kết nối máy chủ');
        } finally {
            setIsLoading(false);
        }
    };

    // ==========================================
    // BƯỚC 2: XỬ LÝ NÚT "XÁC NHẬN" -> TẠO NHÂN VIÊN
    // ==========================================
    const handleFinalSubmit = async (e) => {
        e.preventDefault();

        if (!otp || otp.length !== 6) {
            toast.error('Mã OTP phải bao gồm 6 chữ số!');
            return;
        }

        setIsLoading(true);
        try {
            const token = localStorage.getItem('admin_token');
            const baseUrl = import.meta.env.VITE_API_ADMIN_URL?.replace(/\/$/, '') || '';

            // Gửi nguyên cục data lên BE
            const response = await fetch(`${baseUrl}/create-staff`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ phoneNumber, password, fullName, role, otp })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success('Tạo tài khoản nhân viên thành công!');
                onSuccess(); // Load lại data bảng
                handleClose(); // Tự động đóng modal
            } else {
                toast.error(data.message || 'Mã OTP không đúng hoặc đã hết hạn!');
            }
        } catch (error) {
            console.error('Lỗi create staff:', error);
            toast.error('Lỗi kết nối máy chủ');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-slideUp relative">

                {/* Header Modal */}
                <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
                    <div className="flex items-center gap-3">
                        {/* Nút quay lại (Chỉ hiện ở Step 2) */}
                        {step === 2 && (
                            <button onClick={() => setStep(1)} className="text-slate-400 hover:text-blue-600 transition-colors">
                                <ArrowLeft size={20} />
                            </button>
                        )}
                        <h2 className="text-xl font-bold text-slate-800">
                            {step === 1 ? 'Thêm nhân viên mới' : 'Xác thực OTP'}
                        </h2>
                    </div>
                    <button onClick={handleClose} className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Body Modal - CHUYỂN ĐỔI GIỮA 2 STEP */}
                <div className="p-6">
                    {step === 1 ? (
                        // ------------------------------------
                        // BƯỚC 1: FORM ĐIỀN THÔNG TIN
                        // ------------------------------------
                        <form onSubmit={handleInitialSubmit} className="space-y-4 animate-fadeIn">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Họ và tên</label>
                                <div className="relative">
                                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="Nhập họ và tên..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Vai trò cấp phát</label>
                                <div className="relative">
                                    <Shield size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <select value={role} onChange={(e) => setRole(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                                    >
                                        <option value="MANAGER">Quản lý (Manager)</option>
                                        <option value="CLEANER">Thợ dọn dẹp (Cleaner)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Số điện thoại</label>
                                <div className="relative">
                                    <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input type="text" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="Ví dụ: 0987654321"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mật khẩu khởi tạo</label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="Tối thiểu 6 ký tự"
                                    />
                                </div>
                            </div>

                            <button type="submit" disabled={isLoading}
                                className="w-full mt-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md disabled:opacity-60 flex justify-center items-center gap-2"
                            >
                                {isLoading ? <Loader2 size={20} className="animate-spin" /> : 'Tạo tài khoản'}
                            </button>
                        </form>
                    ) : (
                        // ------------------------------------
                        // BƯỚC 2: FORM XÁC THỰC OTP
                        // ------------------------------------
                        <form onSubmit={handleFinalSubmit} className="space-y-6 animate-slideUp">
                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <Key size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800">Nhập mã xác thực</h3>
                                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                                    Chúng tôi đã gửi mã OTP 6 số đến số điện thoại <br />
                                    <span className="font-bold text-slate-800">{phoneNumber}</span>
                                </p>
                            </div>

                            <div>
                                <input type="text" required value={otp} onChange={(e) => setOtp(e.target.value)}
                                    maxLength={6}
                                    className="w-full text-center text-2xl tracking-[0.5em] font-bold py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="••••••"
                                />
                            </div>

                            <button type="submit" disabled={isLoading}
                                className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-md disabled:opacity-60 flex justify-center items-center gap-2"
                            >
                                {isLoading ? <Loader2 size={20} className="animate-spin" /> : 'Xác nhận & Hoàn tất'}
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
};