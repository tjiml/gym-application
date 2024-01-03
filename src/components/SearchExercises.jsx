import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import BodyPartsContainer from "./BodyPartsContainer";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function SearchExercises({setExercises, bodyPart, setBodyPart}) {   

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {

        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData])
        }

        fetchExercisesData();
    }, [])  

    const handleSearch = async () => {

        if (search) {
            const exercisesData = await fetchData ('https://exercisedb.p.rapidapi.com/exercises?limit=900', exerciseOptions);
            
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) ||
                              exercise.target.toLowerCase().includes(search) ||
                              exercise.equipment.toLowerCase().includes(search) ||
                              exercise.bodyPart.toLowerCase().includes(search)

            );

            setSearch('');
            setExercises(searchedExercises);
        }

    }

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
        <div className="search-exercise-container">

            <div>
                <h1 data-aos="fade-down" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="700">Search for an exercise!</h1>
            </div>

            <div className="search-bar" data-aos="fade-in" data-aos-delay="1500" data-aos-duration="700">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    />
                <a href="#exercises"><button onClick={handleSearch}>Search</button></a>
            </div>

        </div>
  
        <div className="body-parts-container">
            <BodyPartsContainer data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </div>
        </>
    )
} 