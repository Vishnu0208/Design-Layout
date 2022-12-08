import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCalendarDays, faCheckCircle, faHeartCircleCheck, faPersonCirclePlus,} from "@fortawesome/free-solid-svg-icons";

export default function Index4(){
    return(
        <div className="container mt-5 text-light bg-primary">
            <div className="row text-center">
                <div className="col-lg-3 mt-3">
                    <FontAwesomeIcon icon={faCalendarDays} fontSize="25px"/>
                    <h1>12 +</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="col-lg-3 mt-3">
                    <FontAwesomeIcon icon={faCheckCircle} fontSize="25px"/>
                    <h1>999 +</h1>
                    <p>COMPLETED PROJECTS</p>
                </div>
                <div className="col-lg-3 mt-3">
                    <FontAwesomeIcon icon={faPersonCirclePlus} fontSize="25px"/>
                    <h1>480 +</h1>
                    <p>TOTAL CLIENTS</p>
                </div>
                <div className="col-lg-3 mt-3">
                    <FontAwesomeIcon icon={faHeartCircleCheck} fontSize="25px"/>
                    <h1>15 +</h1>
                    <p>AWARD WON</p>
                </div>
            </div>
        </div>
    )
}