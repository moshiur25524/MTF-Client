import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button class="btn text-white font-bold uppercase bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                {children}
            </button>
        </div>
    );
};

export default PrimaryButton;