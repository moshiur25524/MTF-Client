import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingButton from '../Shared/LoadingButton';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch('http://localhost:8080/user', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <LoadingButton />
    }
    return (
        <div>
            <h2 className="text-2xl">All the Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;