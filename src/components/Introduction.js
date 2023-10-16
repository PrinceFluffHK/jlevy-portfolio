import React from "react";
import pic1 from "../images/pic1.png"

const Introduction = (props) => {
    // const headshotUrl = "../images/pic1.png"

    return(
        <div>
            <div className="">
                <img className="headshot" src={pic1}/>
            </div>
            <div>
                "Victory is my destiny"
            </div>
        </div>
    )
}

export default Introduction