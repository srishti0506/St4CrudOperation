import React from "react"
import { Card as Crd } from "react-bootstrap";
import {Button} from "react-bootstrap";
import './card.css'

function CardTemplate(arr){
    return (
        <div className="card-holder-siri animate__animated animate__bounce animate__faster">
            {arr.map((card,idx) => {
                return(
                    <Crd className="profile-style-siri" key={idx} style={{ width: '18rem' }}>
                        <Crd.Img variant="top" src={"https://picsum.photos/200/?t="+Math.random()} />
                        <center><Crd.Body>
                            <Crd.Title>Card Title</Crd.Title>
                            <Crd.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Crd.Text>
                            <Button variant="outline-dark">Go somewhere</Button>
                        </Crd.Body></center>
                    </Crd>      
                );
            })}
        </div>
    );
}


function Card(props){
    return(
        <div>
            <div className="card card-siri">
                <div className="card-body card-body-siri">
                    <center><div className=""><h1>{props.heading}</h1></div></center>
                    {props.showCard && CardTemplate(props.images)}
                    <br />
                    {props.children}
                </div>
            </div>
        </div>
    );
}



export default Card;