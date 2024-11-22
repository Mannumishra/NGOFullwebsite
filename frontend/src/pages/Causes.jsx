/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import donate1 from '../assets/images/donate1.png';
import donate2 from '../assets/images/donate2.png';
import donate3 from '../assets/images/donate3.png';
import Donateblog from '../components/Donateblog';
import Support from '../components/Support';

const Causes = () => {
  return (
    <>
      <div className="container course-container">
        <div className="header header-container">
          <h3 className="fs-3">Our Causes</h3>
          <nav>
            <Link to="/">Home</Link>
            <AiOutlineRight />
            <Link to="">Our Causes</Link>
          </nav>
        </div>
        <div className="sub-header pt-4">
          <div class="container-line justify-content-center">
            <div class="line"></div>
            <div class="text">A help to those who need it</div>
          </div>
          <h3 className="fw-bold pb-3">Each donation is an essential <br />
            help for everyone's life</h3>
        </div>
        <div className="causes">
          <div className="cause">
            <img alt="Image of Girl Marriage Support" height="200" src={donate1} width="300" />
            <div className="cause-content">
              <h3>Girl Marriage Support</h3>
              <p>We can help a child to avoid child marriage and support her education.</p>
              <p className="support">Support: 21,000 / 70,000</p>
              <Link className="donate" to="">View Details</Link>
            </div>
          </div>
          <div className="cause">
            <img alt="Image of Girl Marriage Support" height="200" src={donate2} width="300" />
            <div className="cause-content">
              <h3>Girl Born Benefit</h3>
              <p>Support a new born girl child by helping her to get the required medical care.</p>
              <p className="support">Support: 15,000 / 50,000</p>
              <Link className="donate" to="">View Details</Link>
            </div>
          </div>
          <div className="cause">
            <img alt="Image of Girl Marriage Support" height="200" src={donate3} width="300" />
            <div className="cause-content">
              <h3>Accidental Death Benefit</h3>
              <p>Help families who have lost their loved ones in accidents by providing financial support.</p>
              <p className="support">Support: 10,000 / 75,000</p>
              <Link className="donate" to="">View Details</Link>
            </div>
          </div>
          <div className="cause">
            <img alt="Image of Girl Marriage Support" height="200" src={donate2} width="300" />
            <div className="cause-content">
              <h3>Girl Marriage Support</h3>
              <p>We can help a child to avoid child marriage and support her education.</p>
              <p className="support">Support: 21,000 / 70,000</p>
              <Link className="donate" to="">View Details</Link>
            </div>
          </div>
          <div className="cause">
            <img alt="Image of Girl Marriage Support" height="200" src={donate3} width="300" />
            <div className="cause-content">
              <h3>Girl Born Benefit</h3>
              <p>Support a new born girl child by helping her to get the required medical care.</p>
              <p className="support">Support: 15,000 / 50,000</p>
              <Link className="donate" to="">View Details</Link>
            </div>
          </div>
          <div className="cause">
            <img alt="Image of Girl Marriage Support" height="200" src={donate1} width="300" />
            <div className="cause-content">
              <h3>Accidental Death Benefit</h3>
              <p>Help families who have lost their loved ones in accidents by providing financial support.</p>
              <p className="support">Support: 10,000 / 75,000</p>
              <Link className="donate" to="">View Details</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Support section  */}
      <Support />




    </>
  );
}

export default Causes;
