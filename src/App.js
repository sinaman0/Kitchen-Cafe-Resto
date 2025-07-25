import React from "react";
import ReactDom from "react-dom/client"; // all these come from node module
 import "../index.css";  // ✅ Path depends on your file name

 import Header from "./components/Header";

import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";

 
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import RestuarentMenu from "./components/RestuarentMenu";

import Error from "./components/Error";
import Grocery from "./components/Grocery";


      
      
    
    

    
    



const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
            
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children: [
            {
                path:"/",
                element:<Body/>,
            },
        
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Grocery/>
            },
            {
                 path:"/restuarent/:resId",
                 element:<RestuarentMenu/>

            },
            
        ],
        errorElement: <Error />,
    },
    
    

   

]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
