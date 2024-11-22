import React from 'react';



function Card() {
  return (
    <>
      <div className="container pt-5">
        <div className="row align-items-stretch">
          <div className="c-dashboardInfo col-lg-3 col-md-6">
            <div className="wrap">
              <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
          
              Total Donar
              </h4>
              <span className="hind-font caption-12 c-dashboardInfo__count">10,500</span>
            </div>
          </div>
          <div className="c-dashboardInfo col-lg-3 col-md-6">
            <div className="wrap">
              <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Donations
              </h4>
              <span className="hind-font caption-12 c-dashboardInfo__count">&#8377;500</span><span
                className="hind-font caption-12 c-dashboardInfo__subInfo">Last month: &#8377;30</span>
            </div>
          </div>
          <div className="c-dashboardInfo col-lg-3 col-md-6">
            <div className="wrap">
              <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Earning
              </h4>
              <span className="hind-font caption-12 c-dashboardInfo__count">&#8377;5000</span>
            </div>
          </div>
          <div className="c-dashboardInfo col-lg-3 col-md-6">
            <div className="wrap">
              <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Withdrawal
             
              </h4>
              <span className="hind-font caption-12 c-dashboardInfo__count">&#8377;1000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
