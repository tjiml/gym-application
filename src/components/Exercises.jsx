import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import { Pagination } from "@mui/material";


export default function Exercises({ exercises, setExercises, bodyPart}) {

    console.log(exercises);

    const [currentPage, setCurrentPage] = useState(1);

    const exercisesPerPage = 9

    const indexOfLastExercise = currentPage * exercisesPerPage;

    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    function paginate(e, value) {
      setCurrentPage(value);

      window.scrollTo({top: 1000, behavior:"smooth"})
    } 
    
    return (
       <>
       <div className="container">

            <div className="exercises-categories" id="exercises">
                {currentExercises.map((exercise, index) => (
                  <ExerciseCard key={index} exercise={exercise}/>
                ))}
            </div>

            <div className="pagination">
              {exercises.length > 9 && (
                <Pagination className="paginate"
                  count={Math.ceil(exercises.length / exercisesPerPage)}
                  defaultPage={1}
                  page={currentPage}
                  onChange={paginate}
                  ></Pagination>
              )}
            </div>

       </div>
       </>
    )
} 