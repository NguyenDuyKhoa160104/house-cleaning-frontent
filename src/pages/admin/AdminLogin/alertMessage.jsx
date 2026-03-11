import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export const AlertMessage = ({ alert }) => {
    if (!alert) return null;

    return (
        <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 border transition-all duration-300 animate-fadeIn ${alert.type === 'error'
                ? 'bg-red-50 text-red-600 border-red-100'
                : 'bg-emerald-50 text-emerald-600 border-emerald-100'
            }`}>
            {alert.type === 'error' ? (
                <AlertCircle size={20} className="mt-0.5 shrink-0" />
            ) : (
                <CheckCircle size={20} className="mt-0.5 shrink-0" />
            )}
            <p className="text-sm font-semibold leading-relaxed">{alert.message}</p>
        </div>
    );
};