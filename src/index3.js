import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faMobileAndroidAlt, faPhone, faTv, faW } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";


export default function Index3(){
    return(
        <>
            
            <div className="container">
            <div className="text-center">
                <h2 className="text-info mt-4">Our Services</h2>
                <p className="mt-3 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis.</p>
            </div>
            <div className="row mt-5 col-lg-12">
                    <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-warning d-flex">
                    <FontAwesomeIcon icon={faTv} fontSize="20px" className="mt-2 ml-2"/>
                    <p className="mt-2 ml-4 text-dark"> WEB DESIGN</p>
                </div>
                    <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-warning d-flex">
                    <FontAwesomeIcon icon={faTv} fontSize="25px" className="mt-2 ml-2"/>
                    <p className="mt-2 ml-3 text-dark"> WEB DEVELOPMENT</p>
                </div>
                    <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-warning d-flex">
                    <FontAwesomeIcon icon={faGear} fontSize="25px" className="mt-2 ml-2"/>
                    <p className="mt-2 ml-3 text-dark"> THEME DEVELOPMENT</p>
                </div>
            </div>

            <div className="row mt-3 col-lg-12">
                    <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-warning d-flex">
                    <FontAwesomeIcon icon={faGears} fontSize="25px" className="mt-2 ml-2"/>
                    <p className="mt-2 ml-3 text-dark">GAME DEVELOPMENT</p>
                </div>
                    <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-warning d-flex">
                    <FontAwesomeIcon icon={faMobileAndroidAlt} fontSize="25px" className=" ml-3 mt-2"/>
                    <p className="mt-2 ml-4 text-dark">APPS DEVELOPMENT</p>
                </div>
                    <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-warning d-flex">
                    <FontAwesomeIcon icon={faGear} fontSize="25px" className="mt-2 ml-2"/>
                    <p className="mt-2 ml-3 text-dark">DESKTOP APPLICATION</p>
                </div>
            </div>

            <div className="row mt-3 col-lg-12">
                    <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-warning d-flex">
                    <FontAwesomeIcon icon={faW} fontSize="25px" className="mt-2 ml-2"/>
                    <p className="text-dark mt-2 ml-3">WORDPRESS THEMES</p>
                </div>
                    <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-warning d-flex">
                    <FontAwesomeIcon icon={faTv} fontSize="25px" className="mt-2 ml-2"/>
                    <p className="text-dark mt-2 ml-3">WORDPRESS PLUGINS</p>
                </div>
                    <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-warning d-flex">
                    <FontAwesomeIcon icon={faPhone} fontSize="25px" className="mt-2 ml-2"/>
                    <p className="mt-2 ml-3  text-dark">SUPPORT & IT</p>
                </div>
            </div>


        </div>

         </>
    )
}