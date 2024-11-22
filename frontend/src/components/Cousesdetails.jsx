import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import education from '../assets/images/education.png';
import Support from './Support';


const Cousesdetails = () => {
    return (
        <>
            <div className="container">
                <div className="header header-container">
                    <h3 className="fs-3 pt-4">Girl Education Support</h3>
                    <nav>
                        <Link to="/">Home</Link>
                        <AiOutlineRight />
                        <Link to="">Our Causes</Link>
                    </nav>
                </div>
                <div className="header-text text-center">
                    <div class="container-line justify-content-center">
                        <div class="line"></div>
                        <div class="text">A help to those who need it</div>
                    </div>
                    <h3 className="fw-bold pb-3">Each donation is an essential <br />
                        help for everyone's life</h3>
                </div>
                <div className="image-section">
                    <img src={education} alt="" width={'100%'} height={'450px'} />
                </div>
                <p className="my-5">
                    Childhood is said to be the best part of human life – an age where we are carefree, safe and happy. But a happy childhood is not the reality for many children, who are out-of-school. There are many reasons for children to drop out of school – from challenging socio-economic circumstances, to lack of awareness in communities where education is not seen as a priority.
                    Going to school not only ensures a dignified future and a happy present for children, but also gives them a safe space to express themselves, learn, share and grow. Children who drop out often have to work as child labour, are pushed into child marriages, or become victims of child trafficking.
                    Smile Foundation, through its ‘Shiksha Na Ruke’ initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 120,000 children in 27 states of India.
                    Despite all the odds, these young champions have not given up and continue to dream and work hard. With your support, we can fuel their dreams with accessible and quality education. Join hands with us to ensure a happy and safe childhood for all!
                </p>
            </div>
            <Support />
        </>
    )
}

export default Cousesdetails;
