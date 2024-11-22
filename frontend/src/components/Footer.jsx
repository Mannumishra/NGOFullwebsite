/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import { Link } from 'react-router-dom';
import footer1 from '../assets/images/footer1.jpeg';
import footer2 from '../assets/images/footer2.jpeg';
import footer3 from '../assets/images/footer3.jpeg';
import footer4 from '../assets/images/footer4.jpeg';
import footer5 from '../assets/images/footer5.jpeg';
import footer6 from '../assets/images/footer6.jpeg';
import footer7 from '../assets/images/footer7.jpeg';
import footer8 from '../assets/images/footer8.jpeg';
import { FaClock, FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="container footer-section">
        <div className="row mx-2">
          <div className="col-md-3 mb-4">
            <h5 className="mb-5"> ABOUT US </h5>
            <p> Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem rutrum, id pretium nunc varius. Vestibulum hendrerit malesuada. </p>

            <div className="social-icons">
              <Link to="" className="facebook"> <FaFacebook /> </Link>
              <Link to="" className="twitter"> <FaTwitter /> </Link>
              <Link to="" className="youtube">  <FaYoutube /> </Link>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="mb-5">  ALL CONTACTS </h5>
            <p>
              <FaMapMarkerAlt size={'20'} className='pe-2' />
              111 8th Ave, New York U.S.A.
            </p>
            <p> <FaPhoneAlt size={'20'} className='pe-2' />
              Office +1-202-555-0153
            </p>
            <p> <FaEnvelope size={'20'} className='pe-2' />
              lorem@ipsum.com
            </p>
            <p> <FaClock size={'20'} className='pe-2' />
              08 am - 06 pm Sunday closed
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-5"> SUBSCRIBE </h5>
            <p> Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem
            </p>
            <form className="subscribe-form">
              <input placeholder="Insert Your Email" classNameName="form-control" type="email" />
              <button type="submit">
                SEND
              </button>
            </form>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-5">GALLERY</h5>
            <div className="row gallery">
              <div className="col-3">
                <img alt="Gallery image 1" src={footer1} height="100" width="100" />
              </div>
              <div className="col-3">
                <img alt="Gallery image 2" src={footer2} height="100" width="100" />
              </div>
              <div className="col-3">
                <img alt="Gallery image 3" src={footer3} height="100" width="100" />
              </div>
              <div className="col-3">
                <img alt="Gallery image 4" src={footer4} height="100" width="100" />
              </div>
              <div className="col-3">
                <img alt="Gallery image 5" src={footer5} height="100" width="100" />
              </div>
              <div className="col-3">
                <img alt="Gallery image 6" src={footer6} height="100" width="100" />
              </div>
              <div className="col-3">
                <img alt="Gallery image 7" src={footer7} height="100" width="100" />
              </div>
              <div className="col-3">
                <img alt="Gallery image 8" src={footer8} height="100" width="100" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Footer;