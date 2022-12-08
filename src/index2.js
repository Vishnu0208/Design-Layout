import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faCircleRadiation } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

export default function Index2(){
    return(
        <>
        
        <div className="container">
            <div className='text-center'>
                <h2 className='text-center mt-4 text-info'>Welcome To Our Website</h2>
            </div>

            <div className="row text-center mt-3">
                <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis. Cras convallis ipsum lorem, nec pellentesque nisi tempus ultricies. Integer tempus, tortor id gravida iaculis, odio turpis maximus massa, sed accumsan ante lorem ac arcu. Duis enim massa, venenatis at dictum non, feugiat nec est. Etiam facilisis at ante quis fermentum. Vivamus et ante id risus ornare sollicitudin nec quis nisl. Mauris luctus libero at mauris ultricies tempor.</p>
            </div>

            <div className="text-center mt-3">
            <button type="button" className="button">Read More</button>
            </div>
        </div><br></br>

        <div className='container'>
                <div className="row p3 text-center text-white">
                    <div className="col-lg-4 bg-primary">
                        <FontAwesomeIcon icon={faHistory} fontSize="30px" className="mt-3"/>
                        <h3>Our History</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis.</p>
                    </div>
                    <div className="col-lg-4 bg-dark">
                        <FontAwesomeIcon icon={faCircleRadiation} fontSize="30px" className="mt-3"/>
                        <h3>Our Mission</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis.</p>
                    </div>
                    <div className="col-lg-4 bg-primary">
                        <FontAwesomeIcon icon={faEye} fontSize="30px" className="mt-3"/>
                        <h3>Our Vission</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis.</p>
                    </div>
                </div>
            </div>
        
        </>
    );
}