import React from 'react';
import {  AiOutlineRight } from 'react-icons/ai';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <>
      <div className="container mt-4 mb-5">
      <div className="header header-container">
          <h3 className="fs-3">Contact us</h3>
          <nav>
            <Link to="/">Home</Link>
            <AiOutlineRight />
            <Link to="">Contact</Link>
          </nav>
        </div>
        
        <div className="row pt-5">
          <div className="col-md-4 pb-2">
            <div className="contact-info-card text-center">
              <FaMapMarkerAlt size={'35'} className='pb-2' />
              <h5>Our Address</h5>
              <p>123 Main Street, City, Country</p>
            </div>
          </div>
          <div className="col-md-4 pb-2">
            <div className="contact-info-card text-center">
              <FaEnvelope size={'35'} className='pb-2' />
              <h5>Email Us</h5>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="col-md-4 pb-2">
            <div className="contact-info-card text-center">
              <FaPhoneAlt size={'35'} className='pb-2' />
              <h5>Call Us</h5>
              <p>+1 234 567 890</p>
            </div>
          </div>
        </div>

        <div className="row mt-4 hero-form">
          <div className="col-md-6">
            <h4>Get In Touch</h4>
            <p>Mattis aliquam faucibus purus in. Ornare aenean euismod
              elementum nisi. Quisque sagittis purus sit amet volutpat.
              Pretium lectus quam id leo in vitae. Amet massa vitae tortor
              condimentum lacinia.</p>
            <p>
              Enim blandit volutpat maecenas volutpat blandit. Consequat
              semper viverra nam libero justo laoreet sit amet. Suscipit tellus
              mauris a diam maecenas.</p>
          </div>
          <div className="col-md-6">
            <div className="form-section">
              <form action='#'>
                <div className="row mb-5">
                  <div className="col pb-2">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Email" />
                  </div>
                </div>

                <div className="form-group mb-5">
                  <div className="row">
                    <div className="col">
                      <input type="number" className="form-control" placeholder="Phone number" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control mb-5" id="message" rows="4" placeholder="Comment"></textarea>
                </div>
                <button type="submit" className="btn btn-primary contact-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Map Section */}
      <div className="map-container">
      
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093653!2d144.95373531561625!3d-37.81627974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c6d1fdbe6b0!2s123%20Main%20Street%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1600212937042!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy">
          </iframe>
        </div>
      </div>

      
    </>
  );
};

export default Contact;
