import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
    return (
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold transition-colors">
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Trở về trang chủ</span>
        </Link>
    );
};