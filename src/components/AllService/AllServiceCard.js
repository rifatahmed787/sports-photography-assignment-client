import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import "../Home/ServiceCard.css";

const AllServiceCard = ({ service }) => {
  const { title, img, rating, price, description, _id } = service;
  return (
    <div className="card bg-[#f0ebeb] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 hover:border-[#057EF9] dark:bg-black shadow-2xl border dark:border-white image-size">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p>
          <span className="font-semibold">Rating:</span> {rating}
        </p>
        <p>
          {description.length >= 100
            ? `${description.slice(0, 100)}...more`
            : description}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`}>
            <button type="button" className="custom-bttn btn-7">
              <span>View details</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServiceCard;
