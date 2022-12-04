import React from 'react';

const Review = ({ review }) => {
    const { name, img, reviewed, location } = review
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{reviewed}</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full mr-5">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;