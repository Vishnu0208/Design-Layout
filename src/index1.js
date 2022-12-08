import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './image1.jpg';
import Image1 from './com2.jpg';
import Image2 from './image12.jpg';
import Carousel from 'react-bootstrap/Carousel'


export default  function Index1(){
    return(
        <>

            <div className="container">
                    <div className="row text-light">
                        <h1>1 Page</h1>
                    </div>
                    <div className="col-lg-7">&nbsp;</div>
                <div className=" row justify-content-end text-light">
                    <h6>Home</h6>
                    <h6 className="ml-4">About us</h6>
                    <h6 className="ml-4">Our services</h6>
                    <h6 className="ml-4">Our Portfolio</h6>
                    <h6 className="ml-4">Contact us</h6>
                </div>

                <div className='carousal mt-3'>

                    <Carousel>
                            <Carousel.Item>
                            <img className="d-block w-100 " src={Image} alt="First slide" />
                                <Carousel.Caption className='caption'>
                                    <h3 className="text-light">Game Development</h3>
                                    <p className="text-light">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <button className='butpage1 btn btn-warning text-primary'>GET STARTED</button>
                                </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                                <img className="d-block w-100 " src={Image1} alt="Second slide"/>
                            <Carousel.Caption className='caption'>
                                <h3 className="text-light">Game Development</h3>
                                <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button className='butpage1 btn btn-warning text-primary'>GET STARTED</button>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                                <img className="d-block w-100" src={Image2} alt="Third slide"/>
                            <Carousel.Caption className='caption'>
                                <h3 className="text-light">Game Development</h3>
                                <p className="text-light">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                <button className='butpage1 btn btn-warning text-primary'>GET STARTED</button>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>

                </div>

                

            </div>

        
        </>
    )
}