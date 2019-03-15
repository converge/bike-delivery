import React, { Component } from 'react'
import './style.css';
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { getUserId } from '../../services/auth'
class ParcelItem extends Component {

  state = {
    parcels: []
  }

  componentDidMount = async () => {
    const response = await api.get('/biker/list_parcels', {
      params: {
        userId: getUserId()
      }
    })

    if (response.status === 200) {
      this.setState({
        parcels: response.data
      })
    }
  }

  render() {
    return (
      <div>
        <div className="parcel-wrapper">
          {this.state.parcels.map(row => {
            return (

              <div key={row.id} className={`parcel-item ${row.status}`}>

                <span className={`parcel-id ${row.status}`}>
                  <Link to={`biker/parceldetail/${row.id}`} >
                    <b>#{row.id}</b>
                  </Link>
                </span>
                <span className="parcel-address">
                  <span className="parcel-origin">
                    <b>Origin: </b>{row.origin}
                  </span>
                  <span className="parcel-destination">
                    <b>Destination:</b> {row.destination}
                  </span>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ParcelItem