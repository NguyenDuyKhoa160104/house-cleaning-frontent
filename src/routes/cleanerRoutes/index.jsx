import React from 'react';
// Import CleanerWrapper và các component của Cleaner...

export const cleanerRoutes = [
    {
        path: '/cleaner',
        // element: <CleanerWrapper />, // Bạn tự tạo CleanerWrapper sau nhé
        children: [
            {
                index: true,
                element: <div>Dashboard của Cleaner</div>
            },
            {
                path: 'tasks',
                element: <div>Danh sách công việc dọn dẹp</div>
            }
        ]
    }
];