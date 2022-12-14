import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingButton from '../Shared/LoadingButton';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading , refetch } = useQuery(['doctors'], () => fetch('http://localhost:8080/doctor', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <LoadingButton />
    }
    return (
        <div>
            <h1 className='text-center text-primary text-2xl'>Manage all the doctors: {doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>photo</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, index) =><DoctorRow
                            key={doctor._id}
                            doctor={doctor}
                            index={index}
                            refetch={refetch}
                            />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;