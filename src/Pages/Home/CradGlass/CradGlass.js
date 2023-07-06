import React from "react";
import whiteTeeth from "../../../Features/images/whitening.png";
import cavity from "../../../Features/images/cavity.png";
import flourida from "../../../Features/images/fluoride.png";

const CradGlass = () => {
  return (
    <div>
      <div className="container gap-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={whiteTeeth} alt="whitening" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Teeth whitening</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Appointment</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={cavity} alt="cavity" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cavity Protection</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Appointment</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={flourida} alt="flourida" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CradGlass;
