import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import BikeDeliveryLogo from '../../imgs/bike-delivery-logo.png'
import ParcelItem from '../Parcel/parcelItem'
import ParcelDetail from '../Parcel/parcelDetail'
import './style.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="bike-delivery-logo">
          <img src={BikeDeliveryLogo} alt="Bike Delivery Logo" />
        </div>
        <div className="dashboard-wrapper">
          <div className="content-title">PARCELS MANAGER</div>

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
          <Switch>
            <Route path='/' exact component={ParcelItem} />
            <Route path='/parceldetail' exact component={ParcelDetail} />
          </Switch>
          <footer>
            <div className="footer-image">
            </div>
          </footer>
        </div>


      </div>
    )
  }
}

export default Dashboard