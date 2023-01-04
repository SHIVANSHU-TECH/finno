import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./component/Navbar/Navbar";
import App from "./App";
import Suscribe from "./component/Suscribe/Suscribe"
import Mylearning from "./component/Mylearning/Mylearning";
import  "./component/Mylearning/Mylearning.css";
import "./component/Suscribe/Suscribe.css"
import Footer from "./component/Footer/Footer";
import Services from "./component/Service/Services";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import Mylearn from "./component/Mylearn/Mylearn";
import "./component/Mylearn/Mylearn.css";
import "./component/Login/Login.css";
import Login from "./component/Login/Login";
import Coursed from "./component/Course/Coursed";
import "../src/component/Course/Coursed.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Course from "./component/Course/Coursed";
import Signup from "./component/Signup/Signup";
import "../src/component/Signup/Signup.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "mylearning",
    element: <Mylearning/>,
  },
  {
    path: "suscribe",
    element: <Suscribe/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "mylearn",
    element: <Mylearn/>,
  },
  
  {
    path: "coursed",
     element: <Coursed/>,
   },

  {
   path: "login",
    element: <Login/>,
  },
  {
    path: "signup",
     element: <Signup/>,
   },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<RouterProvider router={router} />
);