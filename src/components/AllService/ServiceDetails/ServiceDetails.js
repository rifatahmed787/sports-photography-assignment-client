import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { title, img, price, rating, description } = useLoaderData();
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl my-20">
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
  );
};

export default ServiceDetails;
