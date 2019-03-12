const { Parcel } = require('../models')

class BikerController {

  /*
   * List users parcels
   * params: userId
   */
  async listParcels(req, res) {
    try {
      const { userId } = req.body
      const parcel = await Parcel.findAll(
        {
          where: {
            user_id: userId
          }
        })
      return res.json(parcel)
    } catch (err) {
      return res.json(err)
    }
  }

  /*
   * Active/Set a parcel to a biker
   * params: parcelId
   */
  async pickUpParcel(req, res) {
    try {
      const { parcelId } = req.body
      const parcel = await Parcel.update({
        status: 'pickedup',
        delivery_start: new Date(),
      }, {
        where: {
          id: parcelId
        }
      })
      return res.json(parcel)
    } catch (err) {
      return res.json(err)
    }
  }

  /*
   * Delivery end, when delivery arrived the destiny
   * params: parcelId
   */
  async deliveryEnd(req, res) {
    try {
      const { parcelId } = req.body
      const parcel = await Parcel.update({
        status: 'delivered',
        delivery_end: new Date()
      }, { where: {
        id: parcelId
      }})
      return res.json(parcel)
    } catch (err) {
      return res.json(err)
    }
  }
}

module.exports = new BikerController()