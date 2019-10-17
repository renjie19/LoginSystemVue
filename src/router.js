import Navigation from "./components/Navigation";
import CreateEmployee from "./components/CreateEmployee";
import ManageEmployee from "./components/ManageEmployee";
import Report from "./components/Report";
import Login from "./components/Login";

export const routes = [
    {
        path: '',
        component: Navigation,
        children: [
            {
                path: '/',
                component: Login,
                name: 'home'
            },
            {
                path: '/add',
                component: CreateEmployee,
                name: 'add'
            },
            {
                path: '/manage',
                component: ManageEmployee,
                name: 'manage'
            },
            {
                path: '/reports',
                component: Report,
                name: 'reports'
            }
        ]
    },
    {
        path: '*',
        redirect: {
            name: 'home'
        }
    }
]