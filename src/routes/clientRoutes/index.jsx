import React from 'react';

import { ClientWrapper } from '../../layouts/wrappers/index_client.jsx'; 
import { Home } from '../../pages/client/Home/index.jsx'; 

export const clientRoutes = [
    {
        path: '/',
        element: <ClientWrapper />, 
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'services',
                element: <div className="p-20 text-center text-2xl font-bold">Trang danh sách dịch vụ (Đang xây dựng)</div>
            }
        ]
    }
];