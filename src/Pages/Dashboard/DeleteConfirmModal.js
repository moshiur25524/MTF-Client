import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;

    const handleDeleteDoctor = () => {
        const url = `https://mtf-server.onrender.com/doctor/${email}`

        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} is being Deleted`)
                    setDeletingDoctor(null)
                    refetch()
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are You Sure you want to Delete <span className='text-gray-700 text-xl font-bold'>{`${name}`}</span> ?</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDeleteDoctor()} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cencel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;