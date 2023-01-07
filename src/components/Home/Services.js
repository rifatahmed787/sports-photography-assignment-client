import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://react-assignment-four-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center mt-10 text-orange-600 ">
        Please visit my services!!!
      </h1>
      <div className="grid grid-cols-1 gap-x-10 mx-auto gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:w-4/5 py-16 margin-left dark:text-white  justify-items-center">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
