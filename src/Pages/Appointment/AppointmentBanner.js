import React from 'react';
import chair from '../../Features/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';
import { format } from 'date-fns';

const AppointmentBanner = ({date, setDate}) => {
   
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                   
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;