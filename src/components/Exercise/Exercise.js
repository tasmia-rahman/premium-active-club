import React from 'react';
import './Exercise.css'

const Exercise = ({ exercise, handleExerciseTime }) => {
    return (
        <div className='exercise'>
            <img src={exercise.img} alt="" />
            <h4>{exercise.name}</h4>
            <p>Time required: {exercise.time}s</p>
            <button onClick={() => handleExerciseTime(exercise)}>Add to list</button>
        </div>
    );
};

export default Exercise;