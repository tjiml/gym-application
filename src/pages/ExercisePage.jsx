import React, { useState, useEffect } from "react";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

export default function ExercisePage() {

    const [bodyPart, setBodyPart] = useState('all');

    const [exercises, setExercises] =  useState([]);

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 500) {
                    setBackToTop(true);
                } else {
                    setBackToTop(false);
                }
            })
        }, [])

    function scrollUp() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <>
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>

        {backToTop && (
                    <button className="back-to-top-button" onClick={scrollUp}><i className="bi bi-arrow-up-circle-fill"></i></button>
                )}
        </>
    )
}