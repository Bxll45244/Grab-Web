import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Edit from '../pages/Edit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // แสดงหน้า Home เมื่อ URL เป็น "/"
  },
  {
    path: "/edit/:id",
    element: <Edit />, // แสดงหน้า Edit เมื่อ URL เป็น "/edit/:id"
  },
]);

export default router;
