import { format } from 'date-fns';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModel = ({ treatment, date, setTreatment }) => {
    const {_id, name, slots } = treatment;
    const formatedDate = format(date , 'PP')
    const [user, loading, error] = useAuthState(auth);
    const handleBooking = e =>{
        e.preventDefault()
        const slot = e.target.slot.value;
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        
        const bookings = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: email,
            patientName: displayName,
            phone
        }
        console.log(bookings);

        fetch('http://localhost:8080/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
                toast(`Appontment is set, ${formatedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have an appointment, ${data?.bookings?.date} at ${data?.bookings?.slot}`)
            }
            setTreatment(null)
        })
       
    }
    return (
        <div>
            <ToastContainer/>
            <input type="checkbox" id="booking-model" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl text-secondary">{name}</h3>

                    <form className='grid grid-cols-1 gap-5 justify-items-center mt-5' onSubmit={handleBooking}>
                        <input type="text" name='date' value={format(date, "PP")} readOnly disabled className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {slots.map(slot => <option value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" value={user?.displayName} name='name' placeholder='Name here' className="input input-bordered w-full max-w-xs" />
                        <input type="email" value={user?.email} readOnly name='email' placeholder="Email here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number here" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className="btn btn-secondary input input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModel;