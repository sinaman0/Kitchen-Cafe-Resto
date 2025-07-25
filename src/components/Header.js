import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact,setbtnNameReact] = useState("Login");

    const onlinestatus = useOnlineStatus();

    return(
    <div className="header">
        <div className="Logo-container">
            <img
             className="logo"
             src={LOGO_URL}
            />

        </div>
        <div className="nav-items">
          <ul>
            <li>
                Online Status: {onlinestatus ? "✅" : "🔴" };
            </li>
            <li>
               <Link to="/">Home</Link> 
            </li>
            <li>
                <Link to = "/about">About us</Link>
             </li>
            <li>
            <Link to = "/contact">Contact us</Link>
                </li>

                <li>
            <Link to = "/grocery">Grocery</Link>
                </li>
            <li>cart</li>

            <button className="login" onClick={() =>{
                btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login"); 
            } }>
                
                {btnNameReact}

            </button>
          </ul>
        </div>
    </div>
    )
}

export default Header;