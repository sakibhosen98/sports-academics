import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import ManageUser from "../Pages/Dashboard/ManageUsers/ManageUser";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import NotFound from "../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ],
    errorElement: <NotFound></NotFound>
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'manageusers',
        element: <ManageUser></ManageUser>
      },
      {
        path: 'manageclasses',
        element: <ManageClasses></ManageClasses>
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myclasses',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'myselectedclass',
        element: <MySelectedClass></MySelectedClass>
      }
      
    ]
  }
]);