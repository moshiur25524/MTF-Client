import React from 'react';

const AddDoctor = () => {
    const handleRegister = async e => {
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            Speciality: e.target.Speciality.value
        }

        console.log(user);

    }

    // let errorMessage;
    // if (error) {
    //     errorMessage = <p className='text-red-700'>{error.message}</p>
    // }
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
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Speciality <span className='text-red-700'>*</span>
                                </div>

                            </div>
                            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" name='Speciality' type="text" placeholder="Enter your Speciality" />
                        </div>
                        <div className="mt-10">
                            {/* {errorMessage} */}
                            <input type='submit' className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
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