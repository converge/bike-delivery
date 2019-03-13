import React, { Component } from 'react'

class Dashboard extends Component {
  render() {
    return(
      <div className="parcel-detail-wrapper">
        <div className="yellow-box">
          <div className="parcel-id">#22313</div>
          <div className="parcel-assigned-to">assigned to: ok@ok.com</div>
          <div className="parcel-detailed-info">
            <ul>
              <li><b>Origin:</b> KölnTourismus GmbH</li>
              <li><b>Destination:</b> Kardinal-Höffner-Platz 1 - D - 50667 - Köln - Germany</li>
              <li><b>Status:</b> assigned</li>
              <li><b>Created:</b> 2019-01-01 00:00:00</li>
              <li><b>Delivery Start:</b> 2019-01-01 00:00:00</li>
              <li><b>Delivery End:</b> 2019-01-01 00:00:00</li>
            </ul>
          </div>
        </div>
        <div className="parcel-detail-buttons">
          <button className="button-start">Start Delivery</button>
          <button className="button-end">End Delivery</button>
        </div>
      </div>
    )
  }
}

export default Dashboard