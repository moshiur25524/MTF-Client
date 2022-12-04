import React from 'react';
import Banner from '../Banner/Banner';
import CradGlass from '../CradGlass/CradGlass';
import DoctorSection from '../DoctorSection/DoctorSection';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'> 
            <Banner/>
            <CradGlass/>
            <Services/>
            <DoctorSection/>
            <Testimonials/>
        </div>
    );
};

export default Home;