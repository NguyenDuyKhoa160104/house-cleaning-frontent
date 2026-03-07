import { createBrowserRouter } from 'react-router-dom';
import { adminRoutes } from './adminRoutes/index.jsx';
import { clientRoutes } from './clientRoutes/index.jsx';
import { cleanerRoutes } from './cleanerRoutes/index.jsx';
import NotFounded from '../pages/NotFounded/index.jsx';

const router = createBrowserRouter([
    // Trải các mảng route con vào mảng tổng
    ...clientRoutes,
    ...adminRoutes,
    ...cleanerRoutes,

    // Bắt lỗi 404 cho toàn bộ hệ thống
    {
        path: '*',
        element: <NotFounded />
    }
]);

export default router;