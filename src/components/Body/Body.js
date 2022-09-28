import React from 'react';
import Details from '../Details/Details';
import Exercises from '../Exercises/Exercises';
import './Body.css'

const Body = () => {
    return (
        <div className='body'>
            <Exercises></Exercises>
            <Details></Details>
        </div>
    );
};

export default Body;