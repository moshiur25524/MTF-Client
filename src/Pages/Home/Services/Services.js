import React from "react";
import image1 from "../../../Features/images/cavity.png";
import image2 from "../../../Features/images/fluoride.png";
import image3 from "../../../Features/images/whitening.png";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      img: image1,
      title: "Jhaka naka service",
    },
    {
      _id: 2,
      img: image2,
      title: "Faltu service",
    },
    {
      _id: 3,
      img: image3,
      title: "Ajaira service",
    },
  ];
  return (
    <div className="mt-5">
      <h1 className="text-center text-2xl text-secondary uppercase font-bold">
        Services
      </h1>
      <p className="text-center text-xl ">All Our Services for you</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
