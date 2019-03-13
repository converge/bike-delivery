import React, { Component } from 'react'
import BikeDeliveryLogo from '../../imgs/bike-delivery-logo.png'
import './bikerStyle.css'
// TODO: keep it ?
class Dashboard extends Component {
  render() {
    return (
      <div className="biker-container">
        <div className="biker-wrapper">
          <div className="logo">
            <img src={BikeDeliveryLogo} alt='Bike Delivery' />
          </div>
          <div className="screen-title">
            Parcel ADMIN
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard