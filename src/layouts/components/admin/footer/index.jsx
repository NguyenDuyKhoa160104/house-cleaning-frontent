import React from 'react';

export const AdminFooter = () => {
    return (
        <footer className="py-4 px-8 text-sm text-gray-400 font-medium flex justify-between items-center">
            <p>&copy; {new Date().getFullYear()} CleanPro Dashboard.</p>
            <p>Hệ thống điều phối v1.0</p>
        </footer>
    );
};