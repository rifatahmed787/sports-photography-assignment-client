import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import svg from "../../assets/images/login/login.svg";
import { AuthContext } from "../contexts/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";
import TitleHooks from "../Shared/TitleHooks";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const { logIn, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  TitleHooks("Log in");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        toast.success("Successfully loged in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (loading) {
    return (
      <div className="text-center">
        <button className="btn loading">loading</button>;
      </div>
    );
  }

  return (
    <div className="hero w-full bg-base-200 my-20 rounded-lg">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={svg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />

              <label className="label">
                <Link href="" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <p className="text-red-600">{error}</p>
            <div className="form-control mt-6">
              <button>
                <input
                  className="btn btn-primary w-full"
                  type="text"
                  value="Log In"
                />
              </button>
            </div>
          </form>
          <div className="flex items-center pb-3 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <SocialLogin></SocialLogin>
          <p className="text-center mb-5 ">
            New to genius car please{" "}
            <Link className="font-bold text-orange-600" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
