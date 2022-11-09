import React from "react";
import { useLoaderData } from "react-router-dom";
import AllServiceCard from "./AllServiceCard";

const AllService = () => {
  const services = useLoaderData();
  //   console.log(services);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-20">
      {services.map((service) => (
        <AllServiceCard key={service._id} service={service}></AllServiceCard>
      ))}
    </div>
  );
};

export default AllService;
