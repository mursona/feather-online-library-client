import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Research from "../../pages/Research/Research/Research";
import Field from "../../pages/Field/Field/Field";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import TermsAndCondition from "../../pages/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserProfile from "../../pages/UserProfile/UserProfile/UserProfile";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
              path: '/',
              element: <Home></Home>,
              loader: () => fetch(`https://learning-platform-server-side.vercel.app/research`)
            },
            {
                path: '/field/:id',
                element: <PrivateRoute><Field></Field></PrivateRoute>,
                loader: ({params}) => fetch(`https://learning-platform-server-side.vercel.app/field/${params.id}`)
            },
            {
                path: '/research/:id',
                element: <Research></Research>,
                loader: ({params}) =>fetch(`https://learning-platform-server-side.vercel.app/research/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            }
        ]
    }

])