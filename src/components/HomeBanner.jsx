import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function HomeBanner() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
        <div className="homebanner-container">
            <h1 data-aos="fade-down" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="700"><span>TJL</span> FIT</h1>
            <Link to="/exercise-page" data-aos="fade-in" data-aos-delay="1500" data-aos-duration="700"><button>EXPLORE EXERCISES</button></Link>
        </div>
        </>
    )
}