import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { title, img, rating, price, description, _id } = service;
  return (
    <div className="card bg-base-100 shadow-xl image-size">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" className="image-size" />
          </PhotoView>
        </PhotoProvider>
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
          <Link to={`/service/${_id}`}>
            <button className="btn btn-primary">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
