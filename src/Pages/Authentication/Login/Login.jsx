import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import SocialLogin from "../../../SharedComponents/SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {

  const {signIn} = useAuth()

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

 console.log(from)

  const handleLogin = e =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      signIn(email, password)
      .then(result => {
          const user = result.user;
          console.log(user);
          Swal.fire({
              title: 'Login Successful.',
              showClass: {
                  popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
              }
          });
          navigate(from, { replace: true });
      })
  }

  return (
    <div className="w-fit mx-auto my-16 lato_font">
      <h1 className="text-left  text-2xl font-semibold my-2 text-[#172734]">
        Log In to your Account
      </h1>
      {/* social log in  */}

      <div className="mb-6  rounded-sm bg-[#f6f4f1] p-6  login-form">
        <SocialLogin></SocialLogin>
        <form onSubmit={handleLogin} className="w-1/2 mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="pb-1 ">
                Enter Email
              </label>
              <input
                type="text"
                name="email"
                className=" p-3 rounded-lg form-input"
                placeholder="example@example.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="pb-1">
                Enter Password
              </label>
              <input
                type="password"
                name="password"
                className="p-3 rounded-lg form-input"
                placeholder="password@123"
              />
            </div>

            <div className="w-2/3 mx-auto text-center">
              <button className="px-6 py-3  uppercase font-medium  rounded-sm text-white w-full bg-[#a6776a]">
                Login
              </button>
            </div>
          </div>
        </form>

        <div className="flex justify-center items-center gap-1">
          <p className="font-normal">New Here?</p>
          <Link to="/signUp">
            <button className="btn btn-link pl-0">SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
