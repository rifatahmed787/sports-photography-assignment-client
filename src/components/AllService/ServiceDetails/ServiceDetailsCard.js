import React from "react";
import png from "../../../assets/images/logo/User_Avatar_2.png";

const ServiceDetailsCard = ({ review }) => {
  const { img, reeviewer, message } = review;
  return (
    <div className="mt-20">
      <div className="border-t border-dashed border-black dark:border-white pt-10 pl-16">
        <div className="flex items-center space-x-3">
          {img ? (
            <div className="avatar online">
              <div className="w-20 rounded-full">
                <img src={img} className="w-16 h-16 rounded-full mr-3" alt="" />
              </div>
            </div>
          ) : (
            <div className="avatar online">
              <div className="w-20 rounded-full">
                <img src={png} className="w-16 h-16 rounded-full mr-3" alt="" />
              </div>
            </div>
          )}
          <div>
            <h1 className="text-black font-semibold dark:text-white text-xl">
              {reeviewer}
            </h1>
            <p className="dark:text-white">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
