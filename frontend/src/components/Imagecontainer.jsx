import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { } from 'react-icons/ai';
import yellowpic from '../assets/images/yellowpic.png';
import darkpic from '../assets/images/darkpic.png';
import latest2 from '../assets/images/this3.png';
import education from '../assets/images/education.png';
import latest1 from '../assets/images/latest1.png';
import latest3 from '../assets/images/this6.png';

const Imagecontainer = () => {
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row about-hero">

                    {/* Left Side Small Images */}
                    <div className="col-md-1 d-flex flex-column">
                        <div className="img-card pb-2" style={{ flexGrow: "1" }}>
                            <img src={yellowpic} alt="Image 1" className="img-fluid" style={{ objectFit: "cover" }} />
                        </div>
                        <div className="img-card" style={{ flexGrow: "1" }}>
                            <img src={darkpic} alt="Image 2" className="img-fluid" style={{ objectFit: "cover" }} />
                        </div>
                    </div>

                    {/* Center Large Image */}
                    <div className="col-md-5 d-flex flex-column">
                        <div className="img-card" style={{ flexGrow: "1" }}>
                            <img src={latest2} alt="Large Image" className="img-fluid" style={{ objectFit: "cover" }} />
                        </div>
                    </div>

                    {/* Right Side Images and About Section */}
                    <div className="col-md-5 d-flex flex-column">
                        <div className="img-card" style={{ flexGrow: "1" }}>
                            <img src={education} alt="Large Image" className="img-fluid pb-2" style={{ objectFit: "cover"}} />
                        </div>
                        <div className="image-section d-flex" style={{ height: "100%", gap: "10px", flexGrow: "1" }}>
                            {/* Text Section */}
                            <div className="about-section-text text-center" style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#20c997", color: "white", padding: "20px" }}>
                                <h5>Save Girl</h5>
                                <ul className="list-unstyled">
                                    <li><FaCheck/> Lorem ipsum dolor</li>
                                    <li><FaCheck/> Lorem ipsum dolor</li>
                                    <li><FaCheck/> Lorem ipsum dolor</li>
                                    <li><FaCheck/> Lorem ipsum dolor</li>
                                </ul>
                            </div>
                            {/* Image Section */}
                            <div className="img-card" style={{ flex: "1", display: "flex", alignItems: "stretch" }}>
                                <img src={latest1} alt="Small Image 2" className="img-fluid" style={{ width: "100%", objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                    {/* Right Side Extra Image */}
                    <div className="col-md-1 d-flex flex-column">
                        <div className="img-card" style={{ flexGrow: "1" }}>
                            <img src={latest3} alt="Image 2" className="img-fluid" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Imagecontainer;
