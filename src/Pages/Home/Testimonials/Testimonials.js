import React from 'react';
import quote from '../../../Features/Icons/quote.svg'
import people1 from '../../../Features/images/people1.png'
import people2 from '../../../Features/images/people2.png'
import people3 from '../../../Features/images/people3.png'

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name:'Md. Moshiur Rahman',
            review:'',
            img: people1
        },
        {
            _id: 2,
            name:'Nahid Shikder',
            review:'',
            img: people2
        },
        {
            _id: 3,
            name:'Sayma Rahman',
            review:'',
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
            <div>

            </div>
        </section>
    );
};

export default Testimonials;