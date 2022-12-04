import React from 'react';
import Banner from '../Banner/Banner';
import CradGlass from '../CradGlass/CradGlass';
import DoctorSection from '../DoctorSection/DoctorSection';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../Shared/Footer/Footer'


const Home = () => {
    return (
        <div className='px-12'> 
            <Banner/>
            <CradGlass/>
            <Services/>
            <DoctorSection/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;