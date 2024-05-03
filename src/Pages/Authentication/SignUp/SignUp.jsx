import { Link } from "react-router-dom";
import SocialLogin from "../../../SharedComponents/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import './SignUp.css'


const SignUp = () => {

    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data)
      }

    return (
        <div className="mx-auto p-4 lg:col-span-3">
      <h1 className="text-center text-3xl font-bold mt-8 mb-2 text-[#172734]">
        Register your account
      </h1>
      <div className="register-form mb-6 p-10 w-80 lg:w-96 mx-auto rounded-sm">
        <form className="mb-6 px-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Personal Information================== */}
          <div className="flex flex-col gap-6">
            

            

            

            
          </div>
        </form>
        <SocialLogin></SocialLogin>
        <div className="flex justify-center items-center gap-1">
          <p className="font-normal">Already have an account?</p>
          <Link to="/login">
            <button className="btn btn-link pl-0">Login</button>
          </Link>
        </div>
      </div>


<form className="grid grid-cols-2 gap-10 w-2/3 mx-auto shadow-md shadow-black p-10 my-10">
  <div>
  <div className="flex flex-col gap-1">
              <label htmlFor="" className="pb-1">
                Your name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="p-3 rounded-lg form-input "
                placeholder="Tabib E Alahi"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="pb-1">
                Photo URL
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                className="p-3 rounded-lg form-input"
                placeholder="url...."
              />
              {errors.photoURL && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="pb-1">
                Enter Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="p-3 rounded-lg form-input"
                placeholder="example@example.com"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
  </div>
  <div>
  <div className="flex flex-col gap-1">
              <label htmlFor="" className="pb-1">
                Enter Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6
                })}
                type="password"
                className="p-3 rounded-lg form-input"
                placeholder="password@123"
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p role="alert" className="text-red-500">
                  Password must be 6 characters minimum
                </p>
              )}
            </div>
            <div className="w-2/3 mx-auto text-center">
              <button className="px-6 py-2  rounded-md text-white w-full bg-[#52ab98]">
                Register
              </button>
            </div>
  </div>
</form>

      
    </div>
    );
};

export default SignUp;