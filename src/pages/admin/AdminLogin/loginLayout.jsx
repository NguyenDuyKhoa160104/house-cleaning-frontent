import React from 'react';
import { BackButton } from './backButton.jsx';
import { LoginHeader } from './loginHeader.jsx';
import { LoginForm } from './loginForm.jsx';
import { LoginFooter } from './loginFooter.jsx';
import { AlertMessage } from './alertMessage.jsx';
import { RightBanner } from './rightBanner.jsx';

export const LoginLayout = ({
    phoneNumber, setPhoneNumber,
    password, setPassword,
    showPassword, setShowPassword,
    isLoading, handleLogin, alert
}) => {
    return (
        <div className="min-h-screen flex font-sans bg-white relative">

            {/* CỘT TRÁI */}
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

            {/* CỘT PHẢI */}
            <RightBanner />
        </div>
    );
};