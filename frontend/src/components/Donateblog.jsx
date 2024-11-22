/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import magic1 from '../assets/images/magicpower.png';
import { Link } from 'react-router-dom';
import { FaCommentAlt } from 'react-icons/fa';
import mission from '../assets/images/latest1.png';
import donation from '../assets/images/latest4.jpeg';
import donec from '../assets/images/latest2.jpeg';
import nicdark from '../assets/images/latest7.jpeg';
import future from '../assets/images/latest5.png';
import education from '../assets/images/education.png';
import help from '../assets/images/latest6.jpeg';
import Imagecontainer from './Imagecontainer';
import { LuQuote } from "react-icons/lu";


const Donateblog = () => {


    return (
        <>
            <section className="mb-4 section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="image-section">
                                <img src={magic1} className="image-custom" alt="Donate a School Bag" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="content-section">
                                <p className="mt-4">Each drop creates the sea</p>
                                <h4>A concrete help for the causes</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id blandit ante. Duis maximus, est quis ultrices euismod.</p>
                                <div className="progress mt-3 mb-3">
                                    <div className="progress-bar bg-light" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">Recurring ... 45%</div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-light" role="progressbar" style={{ width: '86%' }} aria-valuenow="86" aria-valuemin="0" aria-valuemax="100">One-time donations ... 86%</div>
                                </div>
                                <Link to="">
                                    <button className="btn btn-gold mt-4">More Info</button>
                                    {/* <button className="btn btn-gold mt-4">More Info</button> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Multiple image section */}
                <Imagecontainer />
                

                <div className="container-fluid mb-5">
                    <div className="d-flex justify-content-center">
                        <p className="line-left">Stay informed with us</p>
                    </div>
                    <h4 className="fs-2 fw-bold mb-4 text-center">
                        All our latest news and updates
                    </h4>
                    <p className="mb-5 text-center">Donec pellentesque nunc sed neque congue, ut lobortis odio sollicitudin. Curabitur<br /> orci
                        orci, maximus nec sodales vitae, tristique</p>
                    <div className="row">
                        {/* First Column */}
                        <div className="col-md-4 mb-4">
                            <div className="card position-relative card-custom">
                                <img alt="A young girl smiling and writing on a chalkboard" src={mission} className="card-img-top" />
                                <div className="date-badge">19 MAY</div>
                                <div className="card-body">
                                    <p className="text-muted">PROJECTS</p>
                                    <h5 className="card-title">New Mission</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etia pharetra, risus ac hendrerit consectetur, elit nisl luctus est.</p>
                                </div>
                                <div className="card-footer d-flex align-items-center">
                                    <img alt="User profile picture" src="https://storage.googleapis.com/a1aa/image/DpTDYhM5ki7TDV9fIFHmsP5ZJK2d0Oe5k2A1HXbTRfD8rffcC.jpg" width="30" className="rounded-circle me-2" />
                                    <span>nicdark</span>
                                    <FaCommentAlt className="ms-auto" />
                                    <span className="ms-3">2 Comments</span>
                                </div>
                            </div>
                            <div className="project-card position-relative mt-3">
                                <img alt="A young girl smiling and writing on a chalkboard" src={donation} className="card-img-top" style={{ height: 'var(--card-height)', objectFit: 'cover' }} />
                                <div className="card-text position-absolute bottom-0 start-0 p-3 text-white">
                                    <div className="project-category">PROJECTS</div>
                                    <div className="project-title">Ongoing Donations</div>
                                </div>
                            </div>
                        </div>

                        {/* Second Column */}
                        <div className="col-md-4 mb-4">
                            <div className="quote-section quote-section-custom mb-3">
                                <h4 className="fs-3 fw-bolder">Donec magna augue, pellentesque sedle tortor eu moles.</h4>
                                <p>LYNETTE CARTER</p>
                                <LuQuote size={'30'} />
                            </div>
                            <div className="card position-relative card-custom">
                                <img alt="A young girl smiling and writing on a chalkboard" src={future} className="card-img-top" />
                                <div className="date-badge">19 MAY</div>
                                <div className="card-body">
                                    <p className="text-muted">PROJECTS</p>
                                    <h5 className="card-title">Plans for the Future</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, risus ac hendrerit consectetur, elit nisl luctus est.</p>
                                </div>
                                <div className="card-footer d-flex align-items-center">
                                    <img alt="User profile picture" src="https://storage.googleapis.com/a1aa/image/DpTDYhM5ki7TDV9fIFHmsP5ZJK2d0Oe5k2A1HXbTRfD8rffcC.jpg" width="30" className="rounded-circle me-2" />
                                    <span>nicdark</span>
                                    <FaCommentAlt className="ms-auto" />
                                    <span className="ms-3">2 Comments</span>
                                </div>
                            </div>
                            <Link to="" style={{ textDecoration: "none" }}>
                                <div className="footer-section-card text-white text-center pt-5 mt-3 fs-3 fw-bolder">www.nicdark.com</div>
                            </Link>
                        </div>

                        {/* Third Column */}
                        <div className="col-md-4 mb-4">
                            <div className="project-card position-relative">
                                <img alt="A young girl smiling and writing on a chalkboard" src={education} className="card-img-top" style={{ height: '475px', objectFit: 'cover' }} />
                                <div className="card-text position-absolute bottom-0 start-0 p-3 text-white">
                                    <div className="project-category">PROJECTS</div>
                                    <div className="project-title">Results Achieved</div>
                                </div>
                            </div>
                            <div className="card position-relative mt-4 card-custom">
                                <img alt="A young girl smiling and writing on a chalkboard" src={help} className="card-img-top" />
                                <div className="date-badge">19 MAY</div>
                                <div className="card-body">
                                    <p className="text-muted">PROJECTS</p>
                                    <h5 className="card-title">Help the Community</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, risus ac hendrerit consectetur, elit nisl luctus est.</p>
                                </div>
                                <div className="card-footer d-flex align-items-center">
                                    <img alt="User profile picture" src="https://storage.googleapis.com/a1aa/image/DpTDYhM5ki7TDV9fIFHmsP5ZJK2d0Oe5k2A1HXbTRfD8rffcC.jpg" width="30" className="rounded-circle me-2" />
                                    <span>nicdark</span>
                                    <FaCommentAlt className="ms-auto" />
                                    <span className="ms-3">2 Comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Donateblog;
