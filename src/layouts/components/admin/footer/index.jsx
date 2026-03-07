import React from 'react';

export default function AdminFooter() {
    return (
        <footer className="bg-white border-t border-gray-200 py-4 px-6 text-center text-sm text-gray-500 mt-auto">
            <p>&copy; {new Date().getFullYear()} AdminPro. All rights reserved.</p>
        </footer>
    );
}