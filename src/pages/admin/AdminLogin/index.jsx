import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import thẳng các thẻ thành phần vào đây
import { BackButton } from './backButton.jsx';
import { LoginHeader } from './loginHeader.jsx';
import { LoginForm } from './loginForm.jsx';
import { LoginFooter } from './loginFooter.jsx';
import { AlertMessage } from './alertMessage.jsx';
import { RightBanner } from './rightBanner.jsx';

export const AdminLogin = () => {
    // 1. LOGIC QUẢN LÝ STATE
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    const navigate = useNavigate();

    // 2. LOGIC XỬ LÝ API
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setAlert(null);

        try {
            const baseUrl = import.meta.env.VITE_API_ADMIN_URL;
            const response = await fetch(`${baseUrl}staff-login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber, password }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                localStorage.setItem('admin_token', data.token);
                localStorage.setItem('admin_info', JSON.stringify(data.data));

                setAlert({ type: 'success', message: 'Đăng nhập thành công! Đang vào hệ thống...' });
                setTimeout(() => navigate('/admin'), 1000);
            } else {
                setAlert({ type: 'error', message: data.message || 'Thông tin đăng nhập không chính xác.' });
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Lỗi kết nối:', error);
            setAlert({ type: 'error', message: 'Không thể kết nối tới máy chủ. Vui lòng thử lại sau.' });
            setIsLoading(false);
        }
    };

    // 3. GỌI CÁC THẺ GIAO DIỆN VÀ TRUYỀN DỮ LIỆU
    return (
        <div className="min-h-screen flex font-sans bg-white relative">

            {/* Cột trái: Khu vực Form */}
            <div className="w-full lg:w-1/2 flex flex-col relative pt-16">
                <BackButton />

                <div className="flex-1 flex flex-col justify-center items-center px-8 sm:px-16 lg:px-24">
                    <div className="w-full max-w-md">
                        <LoginHeader />

                        <AlertMessage alert={alert} />

                        <LoginForm
                            phoneNumber={phoneNumber}
                            setPhoneNumber={setPhoneNumber}
                            password={password}
                            setPassword={setPassword}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            isLoading={isLoading}
                            handleLogin={handleLogin}
                        />

                        <LoginFooter />
                    </div>
                </div>
            </div>

            {/* Cột phải: Banner */}
            <RightBanner />

        </div>
    );
};