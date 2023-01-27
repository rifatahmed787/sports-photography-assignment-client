import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/AuthProvider";
import ServiceDetailsCard from "./ServiceDetailsCard";
import "../../Home/Services.css";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { title, img, price, rating, description, _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const handleReviewer = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const reeview = form.reeview.value;
    const email = user?.email || "unregistered";
    // console.log(name, photoURL, review);

    const review = {
      review_id: _id,
      reeviewer: name,
      message: reeview,
      img: photoURL,
      email,
      title,
    };

    fetch("https://react-assignment-four-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review placed successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetch(`https://react-assignment-four-server.vercel.app/review/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  return (
    <div>
      {/* section one */}
      <section className="margin-left mx-auto">
        <div className="card sm:w-11/12 md:w-11/12 mx-auto shadow-xl mt-20 dark:text-white dark:bg-black border dark:border-white">
          <figure>
            <img src={img} alt="" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <Link to="/services">
                <button type="button" className="custom-btttn btn-1">
                  Go to services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* section two */}
      <section>
        <div>
          {reviews.map((review) => (
            <ServiceDetailsCard
              key={review._id}
              review={review}
            ></ServiceDetailsCard>
          ))}
        </div>
      </section>

      {/* section three */}
      <section className="mt-16 margin-left mx-auto border-t border-dashed border-black dark:border-white">
        <div>
          <h3 className="text-black dark:text-white text-2xl lg:pl-16 mt-10 font-semibold">
            Write your comment here.
          </h3>
          <form
            onSubmit={handleReviewer}
            className="mb-20 mt-10 sm:px-7 lg:pl-16 checkout-padding "
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered input-accent lg:w-11/12 dark:bg-black"
              />
              <input
                name="photoURL"
                type="text"
                placeholder="photoURL"
                className="input input-bordered input-accent lg:w-7/12 lg:col-span-2 dark:bg-black"
              />
            </div>
            <div className="mt-5 ">
              <textarea
                required
                name="reeview"
                className="textarea textarea-accent w-full lg:w-9/12 h-20 dark:bg-black"
                placeholder="Your review"
              ></textarea>
            </div>
            <div>
              <button className="btn btn-accent w-32 h-10  mt-3">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
