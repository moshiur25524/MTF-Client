import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadingButton from '../Shared/LoadingButton';
import BookingModel from './BookingModel';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const formatedDate = format(date, 'PP')

    // used React query for data fetching
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:8080/available?date=${formatedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <LoadingButton />
    }

    // useEffect(()=>{
    //     fetch(`http://localhost:8080/available?date=${formatedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[formatedDate])
    return (
        <div>
            <h1 className='text-xl text-secondary text-center'>Available Appointment on: {format(date, "PP")}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                treatment && <BookingModel
                    date={date}
                    refetch={refetch}
                    treatment={treatment}
                    setTreatment={setTreatment}
                />
            }
        </div>

    );
};

export default AvailableAppointment;