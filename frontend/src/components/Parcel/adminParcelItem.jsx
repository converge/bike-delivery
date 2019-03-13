import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ParcelItem extends Component {

  render() {
    return (
      <div>
        <div className="parcel-wrapper">
          {this.props.parcels.map(row => {
            return (
              <div key={row.id} className={`parcel-item ${row.status}`}>
                <span className={`parcel-id ${row.status}`}>
                  <Link to={`parceldetail/${row.id}`} >
                    <b>#{row.id}</b>
                  </Link>
                </span>
                <span className="parcel-address">
                  <span className="parcel-origin">
                    <b>Origin: </b>{`${row.origin.slice(0, 35)} ... `}
                  </span>
                  <span className="parcel-destination">
                    <b>Destination:</b> {`${row.destination.slice(0, 29)} ... `}
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