import React, { Component } from 'react'
import './style.css';

class ParcelItem extends Component {
  render() {
    return (
      <div>
        <div className="parcel-item">
          <span className="parcel-id">
            #22919
            </span>
          <span className="parcel-address">
            <span className="parcel-origin">
              <b>Origin:</b> street 1
              </span>
            <span className="parcel-destination">
              <b>Origin:</b> street 2 kwkw
              </span>
          </span>
        </div>

        <div className="parcel-item">
          <span className="parcel-id">
            #22919
            </span>
          <span className="parcel-address">
            <span className="parcel-origin">
              <b>Origin:</b> street 1
              </span>
            <span className="parcel-destination">
              <b>Origin:</b> street 2 kwkw
              </span>
          </span>
        </div>

        <div className="parcel-item">
          <span className="parcel-id">
            #22919
            </span>
          <span className="parcel-address">
            <span className="parcel-origin">
              <b>Origin:</b> street 1
              </span>
            <span className="parcel-destination">
              <b>Origin:</b> street 2 kwkw
              </span>
          </span>
        </div>

        <div className="parcel-item">
          <span className="parcel-id">
            #22919
            </span>
          <span className="parcel-address">
            <span className="parcel-origin">
              <b>Origin:</b> street 1
              </span>
            <span className="parcel-destination">
              <b>Origin:</b> street 2 kwkw
              </span>
          </span>
        </div>

        <div className="load-more">
            <button>Load More</button>
          </div>
      </div>
    )
  }
}

export default ParcelItem