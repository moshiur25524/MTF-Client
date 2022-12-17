import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingButton from '../Shared/LoadingButton';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:8080/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <LoadingButton />
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="card-title">Pay For <span className='text-green-700'>{appointment.treatment}</span></h2>
                    <p>Your Appointment on <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Your Price: $ {appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">

                </div>
            </div>
        </div>
    );
};

export default Payment;