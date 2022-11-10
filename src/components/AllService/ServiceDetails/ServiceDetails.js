import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/AuthProvider";
import ServiceDetailsCard from "./ServiceDetailsCard";

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
      <section>
        <div className="card card-compact w-full bg-base-100 shadow-xl mt-20">
          <figure>
            <img src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <Link to="/services">
                <button className="btn btn-primary">Go to services</button>
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
      <section>
        <div>
          <form
            onSubmit={handleReviewer}
            className="my-20 p-10 checkout-padding border-t-4 border-dashed"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered input-accent w-11/12 "
              />
              <input
                required
                name="photoURL"
                type="text"
                placeholder="photoURL"
                className="input input-bordered input-accent w-7/12 lg:col-span-2"
              />
            </div>
            <div className="mt-5 ">
              <textarea
                required
                name="reeview"
                className="textarea textarea-accent w-9/12 h-20"
                placeholder="Your review"
              ></textarea>
            </div>
            <div>
              <button className="btn btn-success  mt-3">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
