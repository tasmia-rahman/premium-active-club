import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Exercise from '../Exercise/Exercise';
import './Club.css'

const Club = () => {
    const [exercises, setExercises] = useState([]);
    const [selectedExercises, setSelectedExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handleExerciseTime = (exercise) => {
        const newExercises = [...selectedExercises, exercise];
        setSelectedExercises(newExercises);
    }
    return (
        <div className='club-container'>
            <div className='exercises-container'>
                {
                    exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} handleExerciseTime={handleExerciseTime}></Exercise>)
                }
            </div>
            <div className='details-container'>
                <Details selectedExercises={selectedExercises}></Details>
            </div>
        </div>
    );
};

export default Club;