import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faMinus } from "@fortawesome/free-solid-svg-icons";
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';

export default function Index5(){
    return(
        
        <div className="container">
            <div className="mt-4">
                <h2 className="text-info text-center">Portfolio</h2>
            </div>
            <div className="row text-center mt-3">
                <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis. Cras convallis ipsum lorem, nec pellentesque nisi tempus ultricies.</p>
            </div>
            <div className="row">
                <FontAwesomeIcon icon={faCaretDown} className="col-lg-2 text-primary ml-3" fontSize="25px"/>
            </div>
            <div className="row text-primary">
                <div className="col-lg-1">&nbsp;</div>
                <h5 className="col-lg-2">ALL</h5>
                <h5 className="col-lg-3">WEB DEVELOPMENT</h5>
                <h5 className="col-lg-3">GAME DEVELOPMENT</h5>
                <h5 className="col-lg-3">APP DEVELOPMENT</h5>
            </div>
                            
            <div className="row">
                <div className="col-lg-4">
                <img src={img1} height="300px" width="380px" />
                </div>
                <div className="col-lg-4">
                <img src={img2} height="300px" width="380px" />
                </div>
                <div className="col-lg-4">
                <img src={img3} height="300px" width="380px" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                <img src={img4} height="300px" width="380px" />
                </div>
                <div className="col-lg-4">
                <img src={img5} height="300px" width="380px" />
                </div>
                <div className="col-lg-4">
                <img src={img6} height="300px" width="380px" />
                </div>
            </div>
        </div>
    )
}