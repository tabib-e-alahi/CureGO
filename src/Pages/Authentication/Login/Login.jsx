import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
    const handleLogin = () =>{
        console.log("Event Triggered")
    }


    return (
        // grid lg:grid-cols-5 min-h-screen
        <div className=""> 
      <div className="lg:w-2/3 mx-auto p-4 lg:col-span-3">
        <h1 className="text-center text-xl font-semibold mt-8 mb-2 text-[#172734]">
          Log In to your Account
        </h1>
        <div className="mb-6 p-10 w-80 lg:w-96 mx-auto rounded-sm  login-form">
          <form onSubmit={handleLogin}>
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
                <button className="px-6 py-2  rounded-md text-white w-full bg-[#52ab98]">
                  Login
                </button>
              </div>
            </div>
          </form>
          {/* social log in  */}

          {/* <SocialLogin></SocialLogin> */}
          <div className="flex justify-center items-center gap-1">
            <p className="font-normal">New Here?</p>
            <Link to="/signUp">
              <button className="btn btn-link pl-0">Register</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="pl-10 hidden lg:flex flex-col justify-center border bg-[#deebf5] col-span-2">
        <div className="card  ">
        <img
              src={}
              alt="signature image"
              className="w-[360px] h-[320px]"
            />
          <div className="card-body  text-left pt-0">
            <h2 className="text-left text-3xl font-bold text-[#1e4651]">Login to sign with ease.</h2>
            <p className="my-2 w-96">Enter your email and password to access your WeavePDF account. You are one step closer to boosting your document productivity.</p>
            <div className="card-actions">
              <button className="btn btn-link text-[#184138] font-semibold text-lg pl-0 pt-0"><Link to='/'>Explore Features</Link></button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    );
};

export default Login;