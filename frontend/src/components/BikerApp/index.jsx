import React, { Component } from 'react'
import BikeDeliveryLogo from '../../imgs/bike-delivery-logo.png'
import BikerParcelItem from '../Parcel/bikerParcelItem'
import BikeParcelDetail from '../Parcel/bikerParcelDetail'
import { Switch, Route, Link } from 'react-router-dom'
import './style.css';


class BikerApp extends Component {
  render() {
    return (
      <div className="biker-container">
        <div className="biker-wrapper">
          <div className="logo">
            <Link to='/biker'>
              <img src={BikeDeliveryLogo} alt='Bike Delivery' />
            </Link>
          </div>
          <div className="screen-title">
            BIKER WEBAPP
          </div>
          <div className="general-stats">
            <div className="today">Today</div>
            <ul>
              <li>Waiting: <span className="big-number">3</span></li>
              <li>Assigned: <span className="big-number">2</span></li>
              <li>Picked Up: <span className="big-number">7</span></li>
              <li>Delivered: <span className="big-number">13</span></li>
            </ul>
          </div>
          <div className="info-status">
            <ul>
              <li><span className="box-color-yellow"></span> Waiting</li>
              <li><span className="box-color-black"></span> Assigned</li>
              <li><span className="box-color-green"></span> Picked Up</li>
              <li><span className="box-color-grey"></span> Delivered</li>
            </ul>
          </div>
          <article>
            <Switch>
              <Route path='/biker' exact component={BikerParcelItem} />
              <Route path='/biker/parceldetail/:id' exact component={BikeParcelDetail} />
            </Switch>
          </article>

          <footer>
            <div className="footer">
              logout
            </div>
          </footer>

        </div>
      </div>
    )
  }
}

export default BikerApp