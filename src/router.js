import Navigation from "./components/Navigation";
import CreateEmployee from "./components/CreateEmployee";
import ManageEmployee from "./components/ManageEmployee";
import Report from "./components/Report";
import Login from "./components/Login";

export const routes = [
    {path:'/home', component:Navigation, children:[
            {path:'/',component:Login},
            {path:'/add', component: CreateEmployee},
            {path:'/manage',component: ManageEmployee},
            {path:'/reports',component:Report}
        ]},
]