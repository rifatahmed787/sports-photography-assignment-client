import React from "react";

const ServiceDetailsCard = ({ review }) => {
  const { img, reeviewer, message } = review;
  return (
    <div className="mt-20">
      <div className="border-t-2 border-dashed pt-10 pl-16">
        <div className="flex items-center">
          <img src={img} className="w-16 h-16 rounded-full mr-3" alt="" />
          <div>
            <h1 className="dark:text-white text-xl">{reeviewer}</h1>
            <p className="dark:text-white">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
