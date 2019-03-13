import React, { Component } from 'react'
import api from '../../services/api'

class Dashboard extends Component {

  state = {
    parcelItem: [],
    allBikers: [],
    assignedBiker: '',
    assignedNewBiker: '',
    assignedNewBikerId: '',
    transactionInfo: '',
    canAssign: false
  }

  componentDidMount = async () => {
    // retrieve parcel from API
    const { params } = this.props.match
    const parcelResponse = await api.get('/admin/parcel_detail', {
      params: {
        parcelId: params.id
      }
    })
    this.setState({
      parcelItem: parcelResponse.data,
      assignedBiker: parcelResponse.data.user_id
    })

    // retrieve all non admin users
    const bikersResponse = await api.get('/admin/list_all_bikers')
    this.setState({
      allBikers: bikersResponse.data
    })
  }

  handleChange = (e) => {
    // assign new biker to a parcel (state)
    if (e.target.selectedIndex > 1) {
      this.setState({
        // assignedNewBiker: e.target[e.target.selectedIndex].text,
        assignedBiker: e.target[e.target.selectedIndex].text,
        assignedNewBikerId: e.target.value,
        canAssign: true
      })
    } else {
      this.setState({
        canAssign: false
      })
    }
  }

  handleAssign = async (e) => {
    if (this.state.canAssign) {
      // update parcel
      const { params } = this.props.match
      const response = await api.put('/admin/assign_parcel_to_biker', {
        params: {
          parcelId: params.id,
          userId: this.state.assignedNewBikerId
        }
      })
      if (response.status === 200) {
        this.setState(state => ({
          parcelItem: {
            ...state.parcelItem,
            transactionInfo: 'Parcel Assigned to a new Biker !',
            status: 'assigned'
          }
        }))
      }
    } else {
      this.setState({
        transactionInfo: 'Please, select a valid new biker to assign this parcel !',
      })
    }
  }

  handleUnnasign = async () => {
    const { params } = this.props.match
    const response = await api.put('/admin/unassign_parcel_to_biker', {
      params: {
        parcelId: params.id
      }
    })
    if (response.status === 200) {
      this.setState(state => ({
        parcelItem: {
          ...state.parcelItem,
          transactionInfo: 'Parcel unassigned from biker !',
          assignedBiker: '',
          status: 'waiting'
        }
      }))
    }
  }

  render() {
    console.log(this.state.parcelItem)
    return (
      <div className="parcel-detail-wrapper">
        <div className={`detail-box ${this.state.parcelItem.status}`}>
          <div className="parcel-id">#{this.state.parcelItem.id}</div>
          {/* TODO: JOIN to get user_id */}
          <div className="parcel-assigned-to">assigned to: {this.state.assignedBiker}</div>
          <div className="parcel-detailed-info">
            <ul>
              <li><b>Origin:</b> {this.state.parcelItem.origin}</li>
              <li><b>Destination:</b> {this.state.parcelItem.destination}</li>
              <li><b>Status:</b> {this.state.parcelItem.status}</li>
              <li><b>Created:</b> {this.state.parcelItem.created_at}</li>
              <li><b>Delivery Start:</b> {this.state.parcelItem.delivery_start}</li>
              <li><b>Delivery End:</b> {this.state.parcelItem.delivery_end}</li>
              <li><b>Assign to a new biker: </b>
                <select id="new_biker" onChange={this.handleChange}>
                  <option default value="none">Choose a Biker</option>
                  <option value="none1">---</option>
                  {this.state.allBikers.map(row => {
                    return (
                      <option key={row.id} value={row.id} name="ok" >{row.email}</option>
                    )
                  })}
                </select></li>
            </ul>

          </div>
        </div>

        <div className="transaction-info">
          {this.state.transactionInfo}
        </div>

        <div className="parcel-detail-buttons">
          <button onClick={this.handleAssign} className="assign-to-biker">Assign</button>
          <button onClick={this.handleUnnasign} className="unassign-to-biker">Unnasign</button>
        </div>
      </div>
    )
  }
}

export default Dashboard