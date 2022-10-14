import React from "react";
import { Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import {AiFillFacebook, AiFillInstagram,AiFillLinkedin,AiFillGithub,AiFillTwitterCircle} from "react-icons/ai" 
import {BsPinterest} from "react-icons/bs" 
function Home() {
    return (
      <div>
   <>
          
          <div className="container my-3 py-3">
            <div className="intro-siri animate__animated animate__fadeInLeftBig">
           <center> <h1 className="animate-charcter text-design text-center animate__animated animate__fadeInDown">My World</h1></center>
            <hr />
            <p className="lead text-center animate__animated animate__fadeInDown">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              facere doloremque veritatis odit similique sequi. Odit amet fuga nam
              quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
              totam vero quas provident ipsam, veritatis nostrum velit quos
              recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
              earum unde eligendi autem praesentium, doloremque distinctio nesciunt
              porro tempore quis eaque labore voluptatibus ea necessitatibus
              exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
              tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
              quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
              delectus expedita a alias nam recusandae illo debitis repellat libero,
              quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
              dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
            </p>
            </div>
            <div className="intro-siri intro-animation animate__animated animate__fadeInRightBig">
    
            <h2 className="text-center py-4 animate__animated animate__fadeInUp">Our Products</h2>
            <div className="row animate__animated animate__fadeInUp">
              <div className="col-md-3 col-sm-6 mb-3 px-3">
                <div className="card h-100">
                  <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                  <div className="card-body custom-card">
                    <h5 className="card-title text-center">Mens's Clothing</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3 px-3">
                <div className="card h-100">
                  <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                  <div className="card-body">
                    <h5 className="card-title text-center">Women's Clothing</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3 px-3">
                <div className="card h-100">
                  <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                  <div className="card-body">
                    <h5 className="card-title text-center">Jewelery</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3 px-3">
                <div className="card h-100">
                  <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                  <div className="card-body">
                    <h5 className="card-title text-center">Electronics</h5>
                  </div>
                </div>
              </div>
            </div>
            
          <p className="lead text-center animate__animated animate
          __fadeInDown">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            facere doloremque veritatis odit similique sequi. Odit amet fuga nam
            quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
            totam vero quas provident ipsam, veritatis nostrum velit quos
            recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
            earum unde eligendi autem praesentium, doloremque distinctio nesciunt
            porro tempore quis eaque labore voluptatibus ea necessitatibus
            exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
            tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
            quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
            delectus expedita a alias nam recusandae illo debitis repellat libero,
            quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
            dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
          </p>
          </div>
              <div className="intro-siri animate__animated animate__fadeInLeftBig">
              <h2 className="text-center py-4 animate__animated animate__fadeInUp">FAQ</h2>
              <Accordion className= "acordian">
                <Accordion.Item eventKey="0">
                 <Accordion.Header>Accordion Item #1</Accordion.Header>
                 <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #4</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Accordion Item #5</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Accordion Item #6</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    
    </div>
            <div className=" handle-icon ">
            <Button variant="outline-light ">
              <AiFillLinkedin size={20}/>

            </Button>
            <Button variant="outline-light">
              <AiFillFacebook size={20}/>

            </Button>
            <Button variant="outline-light">
              <AiFillInstagram size={20}/>

            </Button>
            <Button variant="outline-light">
              <AiFillGithub size={20}/>

            </Button>
            <Button variant="outline-light">
              <AiFillTwitterCircle size={20}/>

            </Button>
            <Button variant="outline-light">
              <BsPinterest size={20}/>

            </Button>
            

            </div>

          {/* <div className="col-md-3 col-sm-6 mb-3 px-3"> */}
                {/* <div className="card h-100">
                  <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                  <div className="card-body">
                    <h5 className="card-title text-center">Electronics</h5>
                  </div>
                </div> */}
              {/* </div> */}
              </div>
       
        </>
      </div>
  
  
    )
  }
  
  export default Home;