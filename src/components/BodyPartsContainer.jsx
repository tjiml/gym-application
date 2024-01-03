import React from "react";
import BodyPart from "./BodyPart";


export default function BodyPartsContainer({ data, bodyPart, setBodyPart }) {
    return (
        <>
        <div>
            {data.map((item) => (
                <div key={item.id || item} itemID={item.id || item} title={item.id || item}>

                   <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

                </div>
            ))}
        </div>
        </>
    )
}