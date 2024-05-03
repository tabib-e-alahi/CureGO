// import { Link } from "react-router-dom";
import SocialLogin from "../../../SharedComponents/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import "./SignUp.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto w-2/3 my-10  bg-white p-10">
      <SocialLogin></SocialLogin>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-10 "
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="pb-1 text-black text-sm custome_font_family">
              Your name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="p-3  form-input"
              placeholder="Tabib E Alahi"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="pb-1 text-black text-sm custome_font_family">
              Photo URL
            </label>
            <input
              {...register("photoURL", { required: true })}
              type="text"
              className="p-3  form-input"
              placeholder="url...."
            />
            {errors.photoURL && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="pb-1 text-black text-sm custome_font_family">
              Enter Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="p-3  form-input"
              placeholder="example@example.com"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="pb-1 text-black text-sm custome_font_family">
              Enter Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
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
          <div className="w-2/3 mt-4 mx-auto text-center">
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
