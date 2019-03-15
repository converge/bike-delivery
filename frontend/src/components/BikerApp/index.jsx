import React, { Component } from 'react'
import BikeDeliveryLogo from '../../imgs/bike-delivery-logo.png'
import BikerParcelItem from '../Parcel/bikerParcelItem'
import BikeParcelDetail from '../Parcel/bikerParcelDetail'
import { Switch, Route, Link } from 'react-router-dom'
import { logout } from '../../services/auth'
import { connect } from 'react-redux'
import { updateWaiting, updateAssigned, updatePickedup, updateDelivered } from '../../store/actions/statusActions'
import api from '../../services/api'
import { getUserId } from "../../services/auth";
import './style.css';


class BikerApp extends Component {

  handleLogout = () => {
    // remove JWT token
    logout()
    // redirect to login page
    this.props.history.push("/auth/login");
  }

  componentDidMount = async () => {
    const response = await api.get('/biker/general_status', {
      params: {
        userId: getUserId()
      }
    })
    if (response.status === 200) {
      const { waiting, assigned, pickedup, delivered } = response.data
      this.props.updateWaiting(waiting)
      this.props.updateAssigned(assigned)
      this.props.updatePickedup(pickedup)
      this.props.updateDelivered(delivered)
    }
  }

  render() {
    return (
      <div className="biker-container">
          <div className="logo">
            <Link to='/biker'>
              <img src={BikeDeliveryLogo} alt='Bike Delivery' />
            </Link>
          </div>
        <div className="screen-title">
          BIKER WEBAPP
          </div>
        <div className="biker-wrapper">

          <div className="general-stats">
            <div className="today">Today</div>
            <ul>
              <li>Waiting:
                <span className="big-number">
                  {this.props.waiting}
                </span>
              </li>
              <li>Assigned:
                <span className="big-number">
                  {this.props.assigned}
                </span>
              </li>
              <li>Picked Up:
                <span className="big-number">
                  {this.props.pickedup}
                </span>
              </li>
              <li>Delivered:
                <span className="big-number">
                  {this.props.delivered}
                </span>
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
          <article>
            <Switch>
              <Route path='/biker' exact component={BikerParcelItem} />
              <Route path='/biker/parceldetail/:id' exact component={BikeParcelDetail} />
            </Switch>
          </article>

          <footer>
            <div className="footer logout">
              <button onClick={this.handleLogout}>Logout</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(BikerApp)