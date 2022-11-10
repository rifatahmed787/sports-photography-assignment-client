import { Link } from "react-router-dom";
import svg from "../../assets/images/login/login.svg";

import TitleHooks from "../Shared/TitleHooks";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile, loading } = useContext(AuthContext);
  const [error, setError] = useState("");

  TitleHooks("Sign up");

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        toast.success("Successfully signed up");
        handleUpdateProfile(name, photoURL);
      })
      .then((error) => {
        console.error(error);
        // setError(error.message);
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

  // if (loading) {
  //   return (
  //     <div className="text-center">
  //       <button className="btn loading">loading</button>;
  //     </div>
  //   );
  // }

  return (
    <div className="hero w-full bg-base-200 my-20 rounded-lg">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={svg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Signup now!</h1>
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <input
                name="photoURL"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
            </div>

            <div className="form-control mt-6">
              <p className="text-red-600">{error}</p>
              <button>
                {" "}
                <input
                  className="btn btn-primary w-full"
                  type="text"
                  value="Sign Up"
                />
              </button>
            </div>
          </form>
          <p className="text-center mb-5 ">
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
