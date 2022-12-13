import React from 'react';
import appointment from '../../../Features/images/appointment.png'
// import doctorSmall from '../../../Features/images/doctor-small.png'
import doctor from '../../../Features/images/doctor.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const DoctorSection = () => {
    return (
        <div>
            <div style={{background: `url(${appointment})`}} className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="max-w-sm rounded-lg mt-[-100px]" alt='doctor'/>
                    <div>
                        <h1 className="text-5xl text-white font-bold">Box Office News!</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       <PrimaryButton>Call Doctor</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorSection;