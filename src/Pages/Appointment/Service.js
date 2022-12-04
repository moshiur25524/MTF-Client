import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-xl font-bold text-secondary">{name}</h2>
                <p>{slots.length ? <span>{slots[0]}</span> : <span className='text-red-700'>Try another date</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} is available.</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        htmlFor="booking-model"
                        className="btn btn-sm btn-secondary text-white font-bold">{name}</label>
                </div>
            </div>
        </div>
    );
};

export default Service;