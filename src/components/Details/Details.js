import React, { useState } from 'react';
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import toast, { Toaster } from 'react-hot-toast';

const Details = ({ selectedExercises }) => {
    const [breakTime, setBreakTime] = useState(0);

    let totalTime = 0;
    for (const exercise of selectedExercises) {
        totalTime = totalTime + exercise.time;
    }
    const notify = () => toast("Well done!");

    const handleBreakTime = (time) => {
        setBreakTime(time);
        localStorage.setItem('breakTime', time);
    }
    const storedTime = localStorage.getItem('breakTime');

    let finalBreakTime = 0;
    if (breakTime === 0) {
        finalBreakTime = storedTime;
    }
    else {
        finalBreakTime = breakTime;
    }

    if (finalBreakTime === null) {
        finalBreakTime = 0;
    }

    return (
        <div className='details'>
            <div className='my-details'>
                <img src="https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?w=2000" alt="" />
                <div>
                    <h4>Tasmia Rahman</h4>
                    <div className='location'>
                        <FontAwesomeIcon className='location-icon' icon={faLocationDot} />
                        <p>Mirpur, Dhaka</p>
                    </div>
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
            <h4>Add A Break</h4>
            <div className='breaks'>
                <button onClick={() => handleBreakTime(10)}>10s</button>
                <button onClick={() => handleBreakTime(20)}>20s</button>
                <button onClick={() => handleBreakTime(30)}>30s</button>
                <button onClick={() => handleBreakTime(40)}>40s</button>
                <button onClick={() => handleBreakTime(50)}>50s</button>
            </div>
            <h4>Exercise Details</h4>
            <div className='exercise-time'>
                <p>Exercise Time</p>
                <p>{totalTime} seconds</p>
            </div>
            <div className='break-time'>
                <p>Break Time</p>
                <p>{finalBreakTime} seconds</p>
            </div>
            <button className='completed-btn' onClick={notify}>Activity Completed</button>
            <Toaster />
        </div>
    );
};

export default Details;