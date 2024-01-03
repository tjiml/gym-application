import React from "react";
import { Link } from "react-router-dom";

export default function ExerciseCard({ exercise }) {
    return (
        <>
            <div className="exercise-card">
                <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
                <div className="exercise-details">
                    <h1>{exercise.name}</h1>
                    <p>Body Part: {exercise.bodyPart}</p>
                    <p>Targets: {exercise.target}</p>
                </div>
            </div>
  
        </>
    )
}