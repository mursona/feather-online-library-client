import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Research from "../../pages/Research/Research/Research";
import Field from "../../pages/Field/Field/Field";

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
                element: <Field></Field>,
                loader: ({params}) => fetch(`https://learning-platform-server-side.vercel.app/field/${params.id}`)
            },
            {
                path: '/research/:id',
                element: <Research></Research>,
                loader: ({params}) =>fetch(`https://learning-platform-server-side.vercel.app/research/${params.id}`)
            }
        ]
    }

])