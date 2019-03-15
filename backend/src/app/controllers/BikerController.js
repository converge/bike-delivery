const { Parcel } = require('../models')

class BikerController {

  /*
   * List users parcels
   * params: userId
   */
  async listParcels(req, res) {
    try {
      const { userId } = req.query
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
   * Retrieve information about a specific parcel
   * params: parcelId, userId
   */
  async parcelDetail(req, res) {
    try {
      const { parcelId, userId } = req.query
      const parcel = await Parcel.findOne({
        where: {
          id: parcelId,
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
  async startDelivery(req, res) {
    try {
      const now = new Date()
      const { parcelId } = req.body.params
      await Parcel.update({
        status: 'pickedup',
        delivery_start: now,
      }, {
          where: {
            id: parcelId
          }
        })
      return res.json(now)
    } catch (err) {
      return res.json(err)
    }
  }

  /*
   * Delivery end, when delivery arrived the destiny
   * params: parcelId
   */
  async endDelivery(req, res) {
    const now = new Date()
    try {
      const { parcelId } = req.body.params
      await Parcel.update({
        status: 'delivered',
        delivery_end: now
      }, {
          where: {
            id: parcelId
          }
        })
      return res.json(now)
    } catch (err) {
      return res.json(err)
    }
  }


  /*
   * Count the amount of parcels by status and biker
   * params: userId
   */
  async generalStatus(req, res) {
    const { userId } = req.query
    try {
      const waiting = await Parcel.count({
        where: {
          status: 'waiting',
          user_id: userId
        }
      })

      const assigned = await Parcel.count({
        where: {
          status: 'assigned',
          user_id: userId

        }
      })

      const pickedup = await Parcel.count({
        where: {
          status: 'pickedup',
          user_id: userId

        }
      })

      const delivered = await Parcel.count({
        where: {
          status: 'delivered',
          user_id: userId

        }
      })

      const result = {
        waiting,
        assigned,
        pickedup,
        delivered
      }
      return res.json(result)
    } catch (err) {
      return res.json(err)
    }
  }
}


module.exports = new BikerController()