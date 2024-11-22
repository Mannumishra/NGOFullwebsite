import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Investment = () => {
  return (
    <>
      <div className="container">
      <div className="header header-container">
          <h3 className="fs-3 pt-4">Investment Plane</h3>
          <nav>
            <Link to="/">Home</Link>
            <AiOutlineRight />
            <Link to="">Our Causes</Link>
          </nav>
        </div>
        <div className="row py-5">
          <div className="table-responsive">
            <table class="table table-hover text-center border">
              <thead className="red-header">
                <tr>
                  <th scope="col">RANK</th>
                  <th scope="col">LEVEL</th>
                  <th scope="col">LEFT</th>
                  <th scope="col">RIGHT</th>
                  <th scope="col">NDI</th>
                  <th scope="col">INCOME</th>
                  <th scope="col">T.INCOME</th>
                  <th scope="col"> - </th>
                  <th scope="col">KANIYADAAN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">01</th>
                  <td>Leader</td>
                  <td>01</td>
                  <td>02</td>
                  <td>##</td>
                  <td>600</td>
                  <td>₹ 600.00</td>
                  <td> - </td>
                  <td>₹ 2,100.00</td>
                </tr>
                <tr>
                  <th scope="row">02</th>
                  <td>Bronze</td>
                  <td>03</td>
                  <td>03</td>
                  <td>##</td>
                  <td>180</td>
                  <td>₹ 780.00</td>
                  <td> - </td>
                  <td>₹ 2,100.00</td>
                </tr>
                <tr>
                  <th scope="row">03</th>
                  <td>Star Bronze</td>
                  <td>10</td>
                  <td>10</td>
                  <td>##</td>
                  <td>800</td>
                  <td>₹ 1580.00</td>
                  <td> - </td>
                  <td>₹ 3,100.00</td>
                </tr>
                <tr>
                  <th scope="row">04</th>
                  <td>Silver</td>
                  <td>18</td>
                  <td>18</td>
                  <td>##</td>
                  <td>1250</td>
                  <td>₹ 2830.00</td>
                  <td> - </td>
                  <td>₹ 4,100.00</td>
                </tr>
                <tr>
                  <th scope="row">05</th>
                  <td>Silver Star</td>
                  <td>36</td>
                  <td>36</td>
                  <td>##</td>
                  <td>2500</td>
                  <td>₹ 5330.00</td>
                  <td> - </td>
                  <td>₹ 5,100.00</td>
                </tr>
                <tr>
                  <th scope="row">06</th>
                  <td>Gold</td>
                  <td>72</td>
                  <td>72</td>
                  <td>##</td>
                  <td>5000</td>
                  <td>₹ 10330.00</td>
                  <td>(Mobile Fund)</td>
                  <td>₹ 11,000.00</td>
                </tr>
                <tr>
                  <th scope="row">07</th>
                  <td>Gold Star</td>
                  <td>125</td>
                  <td>125</td>
                  <td>##</td>
                  <td>10000</td>
                  <td>₹ 20330.00</td>
                  <td>(laptop Fund)</td>
                  <td>₹ 11,000.00</td>
                </tr>
                <tr>
                  <th scope="row">08</th>
                  <td>Pearl</td>
                  <td>270</td>
                  <td>270</td>
                  <td>##</td>
                  <td>15000</td>
                  <td>₹ 35330.00</td>
                  <td> - </td>
                  <td>₹ 11,000.00</td>
                </tr>
                <tr>
                  <th scope="row">09</th>
                  <td>Coral</td>
                  <td>550</td>
                  <td>550</td>
                  <td>##</td>
                  <td>30000</td>
                  <td>₹ 65330.00</td>
                  <td>(Bike Fund)</td>
                  <td>₹ 21,000.00</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Topaz</td>
                  <td>1015</td>
                  <td>1015</td>
                  <td>##</td>
                  <td>50000</td>
                  <td>₹ 115330.00</td>
                  <td> - </td>
                  <td>₹ 21,000.00</td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Emerald</td>
                  <td>2050</td>
                  <td>2050</td>
                  <td>##</td>
                  <td>70000</td>
                  <td>₹ 185330.00</td>
                  <td> - </td>
                  <td>₹ 21,000.00</td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>Ruby</td>
                  <td>4090</td>
                  <td>4090</td>
                  <td>##</td>
                  <td>150000</td>
                  <td>₹ 335330.00</td>
                  <td> - </td>
                  <td>₹ 21,000.00</td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>Opal</td>
                  <td>8190</td>
                  <td>8190</td>
                  <td>##</td>
                  <td>350000</td>
                  <td>₹ 685330.00</td>
                  <td>(Car Fund)</td>
                  <td>₹ 31,000.00</td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>Diamond</td>
                  <td>16350</td>
                  <td>16350</td>
                  <td>##</td>
                  <td>900000</td>
                  <td>₹ 1585330.00</td>
                  <td>(House Fund)</td>
                  <td>₹ 41,000.00</td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>D. Diamond</td>
                  <td>32750</td>
                  <td>32750</td>
                  <td>##</td>
                  <td>1200000</td>
                  <td>₹ 2785330.00</td>
                  <td> - </td>
                  <td>₹ 51,000.00</td>
                </tr>
                <tr>
                  <th scope="row">16</th>
                  <td>Blue Diamond</td>
                  <td>65600</td>
                  <td>65600</td>
                  <td>##</td>
                  <td>2500000</td>
                  <td>₹ 5285330.00</td>
                  <td> - </td>
                  <td>₹ 1,00,000.00</td>
                </tr>
                <tr>
                  <th scope="row">17</th>
                  <td>Blac Daimond</td>
                  <td>131500</td>
                  <td>131500</td>
                  <td>##</td>
                  <td>11000000</td>
                  <td>₹ 16285330.00</td>
                  <td> - </td>
                  <td>₹ 1,21,000.00</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Investment;
