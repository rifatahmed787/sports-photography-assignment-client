import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import TitleHooks from "../Shared/TitleHooks";
import AllServiceCard from "./AllServiceCard";
import "../Home/Services.css";

const AllService = () => {
  const { loading } = useContext(AuthContext);
  TitleHooks("Services");
  const services = useLoaderData();
  if (loading) {
    return (
      <div className="text-center mt-5 mb-52">
        <button className="btn loading">loading</button>;
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 my-20 margin-left">
      {services.map((service) => (
        <AllServiceCard key={service._id} service={service}></AllServiceCard>
      ))}
    </div>
  );
};

export default AllService;
