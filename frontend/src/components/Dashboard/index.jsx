import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import BikeDeliveryLogo from '../../imgs/bike-delivery-logo.png'
import AdminParcelItem from '../Parcel/adminParcelItem'
import AdminParcelDetail from '../Parcel/adminParcelDetail'
import './style.css'
import api from '../../services/api'

class Dashboard extends Component {

  state = {
    parcels: []
  }

  componentDidMount = async () => {
    // retrieve data from API
    const response = await api.get('/admin/list_parcels')
    // if success, update the component state
    if (response.status === 200) {
      this.setState({
        parcels: response.data
      })
    }
  }

  render(
  ) {
    return (
      <div className="dashboard-container">
        <div className="bike-delivery-logo">
          <Link to='/'>
            <img src={BikeDeliveryLogo} alt="Bike Delivery Logo" />
          </Link>
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
            <Route path='/' exact render={(props) => <AdminParcelItem {...props} parcels={this.state.parcels} />} />
            <Route path='/parceldetail/:id' exact component={AdminParcelDetail} />
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