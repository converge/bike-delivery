import React, { Component } from 'react'
import api from '../../services/api'

class BikeParcelDetail extends Component {

  state = {
    parcelItem: []
  }

  componentDidMount = async () => {
    // retrieve parcel from API
    const { params } = this.props.match
    const response = await api.get('/biker/parcel_detail', {
      params: {
        parcelId: params.id,
        userId: 2 // TODO: get it dynamically
      }
    })
    if (response.status === 200) {
      this.setState({
        parcelItem: response.data
      })
    }
  }

  handleStartDelivery = async () => {
    // pickup parcel
    const { params } = this.props.match
    const response = await api.put('/biker/start_delivery', {
      params: {
        parcelId: params.id,
        userId: 2 // TODO: get it dynamically
      }
    })
    if (response.status === 200) {
      this.setState(state => ({
        parcelItem: {
          ...state.parcelItem,
          delivery_start: response.data,
          status: 'pickedup'
        },
      }))
    }
  }

  handleEndDelivery = async () => {
    const { params } = this.props.match
    const response = await api.put('/biker/end_delivery', {
      params: {
        parcelId: params.id,
        userId: 2 // TODO: get it dynamically
      }
    })
    if (response.status === 200) {
      this.setState(state => ({
        parcelItem: {
          ...state.parcelItem,
          delivery_end: response.data,
          status: 'delivered'
        },
      }))
    }
  }

  render() {
    return (
      <div className="parcel-detail-wrapper">
        <div className={`detail-box ${this.state.parcelItem.status}`}>
          <div className="parcel-id">#{this.state.parcelItem.id}</div>
          {/* TODO: JOIN to get user_id */}
          <div className="parcel-assigned-to">assigned to: {this.state.parcelItem.user_id}</div>
          <div className="parcel-detailed-info">
            <ul>
              <li><b>Origin:</b> {this.state.parcelItem.origin}</li>
              <li><b>Destination:</b> {this.state.parcelItem.destination}</li>
              <li><b>Status:</b> {this.state.parcelItem.status}</li>
              <li><b>Created:</b> {this.state.parcelItem.created_at}</li>
              <li><b>Delivery Start:</b> {this.state.parcelItem.delivery_start}</li>
              <li><b>Delivery End:</b> {this.state.parcelItem.delivery_end}</li>
            </ul>
          </div>
        </div>
        <div className="parcel-detail-buttons">
          <button onClick={this.handleStartDelivery} className="button-start">Start Delivery</button>
          <button onClick={this.handleEndDelivery} className="button-end">End Delivery</button>
        </div>
      </div>
    )
  }
}

export default BikeParcelDetail