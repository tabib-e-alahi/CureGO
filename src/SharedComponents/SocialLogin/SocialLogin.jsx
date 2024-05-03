import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // const axiosPublic = useAxiosPublic()

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        user_Name: result.user?.displayName,
        user_Email: result.user?.email,
        user_Profile_Picture: result.user?.photoURL,
      };
      console.log(userInfo);
      //   axiosPublic.post("/users", userInfo).then((res) => {
      //     console.log(res.data);
      //     navigate("/");
      //   });
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex justify-center items-center gap-6">
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center  bg-white  border rounded-lg  px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <FcGoogle className="h-6 w-6 mr-2"></FcGoogle>
          <span>Continue with Google</span>
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center  bg-white  border rounded-lg  px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <FcGoogle className="h-6 w-6 mr-2"></FcGoogle>
          <span>Continue with Google</span>
        </button>
      </div>
      <div className="divider">OR</div>
    </div>
  );
};

export default SocialLogin;
