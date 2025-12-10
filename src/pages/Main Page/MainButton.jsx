import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainButton = () => {
    const navi = useNavigate();
    
    return (
        <div>
            <button 
                onClick={() => navi('/scrollable')} 
                className='bg-blue-900 px-7 py-2 rounded-3xl text-lg font-semibold my-9 active:scale-95'
            >
                Join Us
            </button>
        </div>
    );
};

export default MainButton;