import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, email, img, Speciality } = doctor;


    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='w-20 h-20 rounded' src={img} alt={name} /></td>
            <td>{name}</td>
            <td>{Speciality}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;