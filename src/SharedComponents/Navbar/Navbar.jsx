import "./Navbar.css";
import profile from "../../assets/profile.png";
import cartIcon from "../../assets/cart.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import SkinConcerns from "../SkinConcerns/SkinConcerns";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const handleSignOut = () => {
    logOut();
  };

  // console.log(user);
  const navLinks = (
    <ul className="flex justify-center gap-10 font-times-new-roman items-center">
      <li className="">
        <NavLink >Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>Brands</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Discover</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
    </ul>
  );

  return (
    <div>
      <div className="navbar  py-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 custom_svg"
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
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[4] bg-transparent rounded-box"
            >
              <SkinConcerns></SkinConcerns>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div>
            {/* <button ></button> */}
            <Link to='/' className="text-6xl lato-font font-semibold text-[#222222]">CureCo</Link>
            <p className="font-bold text-center ">
              An extensive skin care
            </p>
          </div>
        </div>
        <div className="navbar-end gap-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-white rounded-sm  border w-42 p-1 ps-1 focus-within:outline-0"
          />
          {user ? (
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                role="button"
                className="flex justify-center items-center gap-2"
              >
                {user?.photoURL ? (
                  <img
                    className="w-8 h-8 rounded-3xl"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <img className="w-6 h-6" src={profile} alt="" />
                )}
                <h1>{user?.displayName}</h1>
              </button>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[2] p-4 shadow bg-base-100 rounded-sm w-52 mt-4"
              >
                <li>
                  <a>MY Account</a>
                </li>
                <li>
                  <a>My Cart</a>
                </li>
                <li className="mt-2">
                  <button
                    className="bg-[#A6776A] text-center w-fit mx-auto text-white uppercase"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <img className="w-6 h-6" src={profile} alt="" />
            </Link>
          )}

          <Link to='/myCart'>
          <div className="relative py-2">
            {cart?.length > 0 ? (
              <div className="-top-1 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  {cart?.length}
                </p>
              </div>
            ) : (
              ""
            )}
            <img className="w-6 h-6" src={cartIcon} alt="" />
          </div>
          </Link>
        </div>
      </div>
    

      <div className=" bg-[#222222] text-white text-center py-2">
            {navLinks}
        </div>
    </div>
  );
};

export default Navbar;
