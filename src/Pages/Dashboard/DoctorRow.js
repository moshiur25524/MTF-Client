import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, email, img, Speciality } = doctor;

    const handleDeleteDoctor = email => {
        const url = `http://localhost:8080/doctor/${email}`
        const proceed = window.confirm('Are You sure to delete ?')
        if (proceed) {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        toast.success(`${name} is Deleted`)
                        refetch()
                    }
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='w-20 rounded' src={img} alt={name} /></td>
            <td>{name}</td>
            <td>{Speciality}</td>
            <td><button onClick={() => handleDeleteDoctor(email)} className="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;