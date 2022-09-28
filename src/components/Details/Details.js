import React from 'react';
import './Details.css'

const Details = () => {
    return (
        <div className='details'>
            <div className='my-details'>
                <img src="https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?w=2000" alt="" />
                <div>
                    <h4>Tasmia Rahman</h4>
                    <p>Mirpur, Dhaka</p>
                </div>
            </div>
            <div className='my-info'>
                <div className='flex'>
                    <h5>65</h5>
                    <h5>5.3</h5>
                    <h5>25</h5>
                </div>
                <div className='flex'>
                    <h5>Weight</h5>
                    <h5>Height</h5>
                    <h5>Age</h5>
                </div>
            </div>
        </div>
    );
};

export default Details;