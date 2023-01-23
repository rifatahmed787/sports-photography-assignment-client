import { Link } from "react-router-dom";
import svg from "../../assets/images/login/login.svg";

import TitleHooks from "../Shared/TitleHooks";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  console.log(error);

  TitleHooks("Sign up");

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        toast.success("Successfully signed up");
        handleUpdateProfile(name, photoURL);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero  bg-[#F6FAFF] dark:bg-black my-20 rounded-lg">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={svg} alt="" />
        </div>
        <div className="card bg-[#A2CBD2] flex-shrink-0 sm:w-4/5 md:w-11/12 lg:w-[420px] border dark:border-white dark:bg-black shadow-2xl">
          <h1 className="text-3xl mt-4 font-bold text-center dark:text-white ">
            Signup now!
          </h1>
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered dark:bg-black dark:border-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">photoURL</span>
              </label>
              <input
                name="photoURL"
                type="text"
                placeholder="photoURL"
                className="input input-bordered dark:bg-black dark:border-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Email</span>
              </label>
              <input
                required
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered dark:bg-black dark:border-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Password</span>
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered dark:bg-black dark:border-white"
              />
            </div>

            <div className="form-control mt-6">
              <button>
                {" "}
                <input
                  className="btn border-none bg-gradient-to-r from-cyan-500 to-blue-500 w-full"
                  type="submit"
                  value="Sign Up"
                />
              </button>
            </div>
            <p className="text-red-600">{error}</p>
          </form>
          <p className="text-center mb-5 dark:text-white">
            Already have an account? please{" "}
            <Link className="font-bold text-orange-600" to="/signin">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
