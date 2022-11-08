import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, rating, price, description } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <p>
          {description.length >= 100
            ? `${description.slice(0, 100)}...more`
            : description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
