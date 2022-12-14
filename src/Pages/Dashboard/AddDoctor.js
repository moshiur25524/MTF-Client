import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import LoadingButton from '../Shared/LoadingButton';

const AddDoctor = () => {

    const { data: tools, isLoading } = useQuery(['tools'], () => fetch(`http://localhost:8080/tools`).then(res => res.json()))

    const imageStorageKey = 'f7353b36837541bf9e1697d5a71f34d2'

    const handleRegister = async e => {
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            speciality: e.target.Speciality.value,
            image: e.target.image.files[0]
        }

        const formData = new FormData();
        formData.append('image', user.image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: user.name,
                        email: user.email,
                        Speciality: user.speciality,
                        img: img
                    }
                    // send to your database
                    fetch('http://localhost:8080/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Added doctor successfully')
                                e.target.reset()
                            }
                            else {
                                toast.error('Failed to add a doctor')
                            }
                        })
                }
                // console.log('imgbb', result);
            })

        console.log(user);

    }

    if (isLoading) {
        return <LoadingButton />
    }

    return (
        <div>
            <h1 className='text-3xl'>Add a Doctor</h1>
            <div className="lg:w-1/2 xl:max-w-screen-sm">
                <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                    <form onSubmit={handleRegister} className='mx-auto align-center'>
                        <div>
                            <div className="text-sm font-bold text-gray-700">Full Name <span className='text-red-700'>*</span></div>
                            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" name='name' placeholder="Enter Your Name" required />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address <span className='text-red-700'>*</span></div>
                            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" name='email' placeholder="mike@gmail.com" required />
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Speciality <span className='text-red-700'>*</span>
                                </div>

                            </div>
                            <select name='Speciality' className="select select-bordered w-full max-w-xs">
                                {
                                    tools?.map(tool => <option value={tool.name} key={tool._id}>{tool.name}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-700">Doctor Image<span className='text-red-700'>*</span></div>
                            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="file" name='image' required />
                        </div>
                        <div className="mt-10">
                            <input type='submit' className="bg-secondary text-2xl text-gray-100 p-4 w-full rounded-full tracking-wide
                            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                            shadow-lg" value='Add Doctor' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;