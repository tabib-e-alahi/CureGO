import "./Navbar.css";
import profile from "../../assets/profile.png";
import cart from "../../assets/cart.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink className="nav_items">Home</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#f6f4f1] p-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div>
            <a className="text-6xl logo text-[#A6776A]">CureCo</a>
            <p className="font-bold text-center text-[#A6776A]">
              An extensive skin care
            </p>
          </div>
        </div>
        <div className="navbar-end gap-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#f6f4f1] rounded-sm  border w-32 py-1 ps-1"
          />
          {user ? (
            <h1>User Exist</h1>
          ) : (
            <Link to="/login">
              <img className="w-6 h-6" src={profile} alt="" />
            </Link>
          )}

          <img className="w-6 h-6" src={cart} alt="" />
        </div>
      </div>
      <ul className="flex justify-center items-center gap-10 text-xl text-black pb-4">
        {navLinks}
      </ul>
    </div>
  );
};

export default Navbar;
