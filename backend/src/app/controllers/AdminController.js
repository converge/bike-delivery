const { User, Parcel } = require('../models')
const faker = require('faker')

class AdminController {

  async store(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorrect password' })
    }
    return res.json({
      user,
      token: user.generateToken()
    })
  }

  /*
   * List all parcels
   */
  async listParcels(req, res) {
    try {
      const parcel = await Parcel.findAll()
      return res.json(parcel)
    } catch (err) {
      return res.json(err)
    }
  }

  /*
   * Assign parcel to a Bike
   * params: parcelId, bikerId
   */
  async assignParcelToBiker(req, res) {
    try {
      const { parcelId, userId } = req.body
      console.log(parcelId)
      console.log(userId)
      const parcel = Parcel.update({
        status: 'assigned',
        user_id: userId
      }, { 
        where: { id: parcelId }
      })
      return res.json(parcel)
    } catch (err) {
      return res.json(err)
    }
  }

  /*
   * Populate random data for users (this is just for the Proof of Concept version)
   */
  async populateUsers(req, res) {
    try {
      // create admin user
      await User.create({
        email: 'admin@admin.com',
        is_admin: 1,
        password: '123',
        created_at: faker.date.recent(),
      })

      // create 10 new users randomly
      for (let i = 0; i < 9; i++) {
        await User.create({
          email: faker.internet.email(),
          password: '123',
          created_at: faker.date.recent(),
        })
      }
      return res.json('Users created')
    } catch (err) {
      return res.json(err)
    }
  }

  /*
   * Delete all users (this is just for the Proof of Concept version)
   */
  async deleteUsers(req, res) {
    try {
      await User.destroy({where: {}}).then(function () {});
      return res.json('Users deleted')
    } catch (err) {
      return res.json(err)
    }
  }
}

module.exports = new AdminController()