import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import BikeDeliveryLogo from '../../imgs/bike-delivery-logo.png'
import AdminParcelItem from '../Parcel/adminParcelItem'
import AdminParcelDetail from '../Parcel/adminParcelDetail'
import api from '../../services/api'
import { logout } from '../../services/auth'
import { connect } from 'react-redux'
import { updateWaiting, updateAssigned, updatePickedup, updateDelivered } from '../../store/actions/statusActions'
import './style.css'

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

    const responseStatus = await api.get('/admin/general_status')
    if (responseStatus.status === 200) {
      const { waiting, assigned, pickedup, delivered } = responseStatus.data
      this.props.updateWaiting(waiting)
      this.props.updateAssigned(assigned)
      this.props.updatePickedup(pickedup)
      this.props.updateDelivered(delivered)
    }
  }

  handleLogout = () => {
    // remove JWT token
    logout()
    // redirect to login page
    this.props.history.push("/auth/login")
  }

  callRedux = () => {
    this.props.updateWaiting(-1)
    this.props.updateAssigned(-1)
    this.props.updatePickedup(-1)
    this.props.updateDelivered(-1)
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="logo-wrapper">
          <div className="bike-delivery-logo">
            <Link to='/'>
              <img src={BikeDeliveryLogo} alt="Bike Delivery Logo" />
            </Link>
          </div>
          <div className="logout">
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
        <div className="dashboard-wrapper">
          <div className="content-title">PARCELS MANAGER</div>

          <div className="general-stats">
            <div className="today">Today</div>
            <ul>
              <li>Waiting: 
                <span className="big-number">{this.props.waiting}</span>
              </li>
              <li>Assigned: 
                <span className="big-number">{this.props.assigned}</span>
              </li>
              <li>Picked Up: 
                <span className="big-number">{this.props.pickedup}</span>
              </li>
              <li>Delivered: 
                <span className="big-number">{this.props.delivered}</span>
              </li>
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

const mapStateToProps = (store) => {
  return {
    waiting: store.status.waitingStatus,
    assigned: store.status.assignedStatus,
    pickedup: store.status.pickedupStatus,
    delivered: store.status.deliveredStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateWaiting: (value) => dispatch(updateWaiting(value)),
    updateAssigned: (value) => dispatch(updateAssigned(value)),
    updatePickedup: (value) => dispatch(updatePickedup(value)),
    updateDelivered: (value) => dispatch(updateDelivered(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)