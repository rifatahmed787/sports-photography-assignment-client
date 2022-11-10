import React from "react";

const ServiceDetailsCard = ({ review }) => {
  const { img, reeviewer, message } = review;
  return (
    <div className="mt-20">
      <div className="border-t-2 border-dashed p-10">
        <div className="flex items-center">
          <img src={img} className="w-16 rounded-full mr-3" alt="" />
          <h1>{reeviewer}</h1>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
