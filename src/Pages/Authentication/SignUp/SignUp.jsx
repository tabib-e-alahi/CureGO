
import SocialLogin from "../../../SharedComponents/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      reset();
      Swal.fire({
        title: "Registration Completed",
        text: "thanks For registering",
        icon: "success",
      });
      navigate("/");
        
    }).catch((error) => console.log(error));
  };

  return (
    <div className="mx-auto w-7/12 my-16  bg-[#f6f4f1] p-10">
      <SocialLogin></SocialLogin>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-10 "
      >
        <div className="flex flex-col gap-8">
          {/* ------------------------- name field --------------------------------- */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="pb-1 text-black   font-medium custome_font_family"
            >
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="p-3  form-input"
              placeholder=""
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                Full Name field is required
              </span>
            )}
          </div>

          {/* ------------------------- email field --------------------------------- */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="pb-1 text-black font-medium custome_font_family"
            >
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="p-3  form-input"
              placeholder=""
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                Emnail Address field is required
              </span>
            )}
          </div>

          {/* ------------------------- confirm email field --------------------------------- */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="pb-1 text-black font-medium custome_font_family"
            >
              Confirm Email Address
            </label>
            <input
              {...register("confirmEmail", { required: true })}
              type="email"
              className="p-3  form-input"
              placeholder=""
            />
            {errors.confirmEmail && (
              <span className="text-red-500 text-sm">
                Confirm your email address
              </span>
            )}
          </div>
          {/* ------------------------- password field --------------------------------- */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="pb-1 text-black font-medium custome_font_family"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              type="password"
              className="p-3 rounded-lg form-input"
              placeholder=""
            />
            {errors.password?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p role="alert" className="text-red-500 text-sm">
                Password must be 6 characters minimum
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="pb-1 text-black font-medium custome_font_family"
            >
              Phone Number
            </label>
            <input
              {...register("phoneNo", { minLength: 11, maxLength: 11, min: 1 })}
              type="text"
              className="p-3  form-input"
              placeholder="01XXXXXXXXX"
            />
            {errors.phoneNo && (
              <span className="text-red-500 text-sm">
                Please enter a valid phone number
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="pb-1 text-black font-medium custome_font_family"
            >
              Referral Code(Optional)
            </label>
            <input
              {...register("referralCode")}
              type="text"
              className="p-3  form-input"
              placeholder=""
            />
            <p className="text-sm text-gray-600">
              *Your referrals discount is automatically applied a cart
            </p>
          </div>

          <div className="w-10/12  mx-auto text-center">
            <button className="px-6 py-3 text-lg  rounded-sm text-white w-full uppercase bg-[#a6776a]">
              Sign Up
            </button>

            <p className="text-sm text-left">
              By clicking “SIGN UP”, I agree to CureCo&apos;s{" "}
              <a href="" className="text-blue-600">
                Terms of Use
              </a>{" "}
              and{" "}
              <a className="text-blue-600" href="http://">
                Privacy Policy
              </a>
            </p>
          </div>

          <div className="flex justify-center items-center gap-1">
            <p className="font-normal text-gray-600">
              Already have an account?
            </p>
            <Link to="/login">
              <button className="btn btn-link pl-0">Login</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
