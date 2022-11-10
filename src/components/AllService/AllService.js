import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import TitleHooks from "../Shared/TitleHooks";
import AllServiceCard from "./AllServiceCard";

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
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-20">
      {services.map((service) => (
        <AllServiceCard key={service._id} service={service}></AllServiceCard>
      ))}
    </div>
  );
};

export default AllService;
