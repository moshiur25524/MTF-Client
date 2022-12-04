import React from 'react';
import quote from '../../../Features/Icons/quote.svg'
import people1 from '../../../Features/images/people1.png'
import people2 from '../../../Features/images/people2.png'
import people3 from '../../../Features/images/people3.png'
import Review from '../Review/Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name:'Md. Moshiur Rahman',
            reviewed:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using will',
            location:'Bangladesh',
            img: people1
        },
        {
            _id: 2,
            name:'Nahid Shikder',
            reviewed:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            location:'India',
            img: people2
        },
        {
            _id: 3,
            name:'Sayma Rahman',
            reviewed:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using will ',
            location:'Borishal',
            img: people3
        },
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Our Testimonials</h4>
                    <h2 className='text-3xl'>What our Customers says</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;