import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
// import bannerImage from '../../../Features/images/Sreemongol.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Enjoy All Our Tools!</h1>
                        <p className="py-6">Bangladesh Machine Tools Factory is located in Dhaka Division. This business is working in the following industry: <br /> Wholesale of machinery.</p>
                        <PrimaryButton><Link to='/appointment'>Call Doctor</Link></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;