import React from 'react';
// Import ClientWrapper và các component của Client...

export const clientRoutes = [
    {
        path: '/',
        // element: <ClientWrapper />, // Bạn tự tạo ClientWrapper sau nhé
        children: [
            {
                index: true,
                element: <div>Trang chủ Client</div>
            },
            {
                path: 'products',
                element: <div>Trang danh sách sản phẩm</div>
            }
        ]
    }
];