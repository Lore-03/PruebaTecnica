// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Producto from './pages/Producto';
import Chatbot from './pages/Chatbot';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    // {
    //     path: '/productos',
    //     element: <Producto />,
    // },
    {
        path: '/chatbot',
        element: <Chatbot />,
    },
]);

export default router;