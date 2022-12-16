
import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`http://localhost:8080/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully made an admin')
                }
            })
    }

    // const handleDeleteUser = () => {
    //     const proceed = window.confirm(`Are You Sure to Delete the ${email}`)
    //     if (proceed) {
    //         fetch(`http://localhost:8080/user/${email}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 toast.error('Deleted User Successfull')
    //             })
    //     }
    // }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make admin</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;