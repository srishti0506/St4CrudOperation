import React from "react";
import Card from './Card/Card';
import av1 from "./res/avatar-1.webp";
import av2 from "./res/avatar-2.webp";
import av3 from "./res/avatar-3.webp";
import av4 from "./res/avatar-4.png";

const About =()=>{
    return(
        <div className="container text-center animate__animated animate__fadeInDown">
            <div className="py-4">
            <Card heading="About Us" showCard={true} images={[av1,av2,av3,av4]}>
            </Card>
            </div>
        </div>
    );
};
export default About;

