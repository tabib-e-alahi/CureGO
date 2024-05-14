import "./Navbar.css";
import profile from "../../assets/profile.png";
import cartIcon from "../../assets/cart.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const handleSignOut = () => {
    logOut();
  };

  // console.log(user);
  const navLinks = (
    <>
      {/* <li>
        <NavLink className="nav_items">Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About Us</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact Us</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li> */}
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
      <ul className="flex justify-center items-center gap-10 text-xl text-black pb-4">
        {navLinks}
      </ul>

      <div className="bg-gray-600 w-11/12 mx-auto text-white text-center py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quidem id quos, animi non reprehenderit! Saepe, itaque vitae! Magni, illo!
        </div>
    </div>
  );
};

export default Navbar;
