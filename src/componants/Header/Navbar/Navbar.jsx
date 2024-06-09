import { NavLink } from "react-router-dom";
import logo from "../../../../public/images/ainan.png"; 
import Banner from "../Banner/Banner";
import More from "../../More/More";
import AwardCoffee from "../../../AwardCoffee/AwardCoffee";
import Review from "../../Review/Review";
import Footer from "../../Review/Footer";
import AddCoffee from "../../../pages/AddCoffee/AddCoffee";


const Navbar = () => {
  return (
    <div>
  <nav className="flex  justify-between items-center lg:h-28 h-24 text-sm lg:text-lg  bg-blue-950 ">
        <div>
          <img
            className="lg:w-28  lg:h-auto h-20 w-20 rounded-tl-lg

rounded-tr-lg

rounded-br-lg

rounded-bl-lg bg-blue-950  "
            src={logo}
            alt="Logo"
          />{" "}
        
        </div>
        <ul className="flex items-center gap-3 text-white lg:mr-14 text-sm lg:text-md font-bold ">
          <li className="">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-cyan-500" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addCoffee"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-cyan-500" : ""
              }
            >
              Select Coffee
              
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/viewCoffee"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-cyan-500" : ""
              }
            >
              Order Coffee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-cyan-500" : ""
              }
            >
              LogIn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-cyan-500" : ""
              }
            >
              SignUp
            </NavLink>
          </li>


        </ul>
      </nav>
     
    </div>
  );
};

export default Navbar;
