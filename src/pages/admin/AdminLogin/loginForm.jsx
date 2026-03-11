import React from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export const LoginForm = ({
    phoneNumber, setPhoneNumber,
    password, setPassword,
    showPassword, setShowPassword,
    isLoading, handleLogin
}) => {
    return (
        <form className="space-y-5" onSubmit={handleLogin}>
            <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                        <Mail size={20} />
                    </div>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        placeholder="Ví dụ: 0987654321"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mật khẩu cấp phát</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                        <Lock size={20} />
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-700 transition-colors"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-200 mt-6 flex justify-center items-center ${isLoading
                        ? 'bg-blue-400 cursor-not-allowed shadow-none'
                        : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5'
                    }`}
            >
                {isLoading ? (
                    <span className="animate-pulse">Đang xác thực...</span>
                ) : (
                    "Truy cập hệ thống"
                )}
            </button>
        </form>
    );
};