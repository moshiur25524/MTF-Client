import React from "react";
import { TbDental } from "react-icons/tb";

const Service = ({ service }) => {
  const { img, title } = service;
  return (
    <div>
      <div className="card mb-[100px] w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <TbDental style={{ color: "white", fontSize: "2em" }} /> &nbsp;
              Treatment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
