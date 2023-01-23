import React from "react";
import { useLoaderData } from "react-router-dom";
import TitleHooks from "../Shared/TitleHooks";
import AllServiceCard from "./AllServiceCard";
import "../Home/Services.css";

const AllService = () => {
  TitleHooks("Services");
  const services = useLoaderData();

  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3 my-20 sm:w-4/5 dark:text-white mx-auto margin-left">
      {services.map((service) => (
        <AllServiceCard key={service._id} service={service}></AllServiceCard>
      ))}
    </div>
  );
};

export default AllService;
