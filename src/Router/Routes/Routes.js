import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import About from '../../Pages/Home/About/About';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import Checkout from '../../Pages/Checkout/Checkout';
import Services from '../../Pages/Home/Services/Services';
import Orders from '../../Pages/Orders/Orders';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/checkout/:id',
                element: (
                    <PrivateRoute>
                        <Checkout></Checkout>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: '/orders',
                element: (
                    <PrivateRoute>
                        <Orders></Orders>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
