import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingModel from './BookingModel';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:8080/tools')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-xl text-secondary text-center'>Available Appointment on: {format(date, "PP")}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                treatment && <BookingModel
                 date={date} 
                 treatment={treatment}
                 setTreatment={setTreatment}
                 />
            }
        </div>
        
    );
};

export default AvailableAppointment;