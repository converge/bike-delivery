const routes = require('express').Router()
const AdminController = require('./app/controllers/AdminController')
const BikerController = require('./app/controllers/BikerController')
const { User } = require('./app/models')
// const authMiddleware = require('./app/middleware/auth')

// Admin routes
routes.post('/admin', AdminController.store)
routes.get('/admin/list_parcels', AdminController.listParcels)
routes.get('/admin/parcel_detail', AdminController.parcelDetail)
routes.put('/admin/assign_parcel_to_biker', AdminController.assignParcelToBiker)
routes.put('/admin/unassign_parcel_to_biker', AdminController.unassignParcelToBiker)
routes.get('/admin/list_all_bikers', AdminController.listAllBikers)
routes.get('/admin/general_status', AdminController.generalStatus)
// Admin special routes
routes.post('/admin/populate_users', AdminController.populateUsers)
routes.delete('/admin/delete_users', AdminController.deleteUsers)

// Biker routes
routes.get('/biker/list_parcels', BikerController.listParcels)
routes.get('/biker/parcel_detail', BikerController.parcelDetail)
routes.put('/biker/start_delivery', BikerController.startDelivery)
routes.put('/biker/end_delivery', BikerController.endDelivery)
routes.get('/biker/general_status', BikerController.generalStatus)

// Authentication middleware
// routes.use(authMiddleware)

routes.post('/auth/login', async (req, res) => {
  // get user/passwd
  const { email, password } = req.body
  // find user
  try {
    const user = await User.findOne({ where: {
      email: email
    }})
    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }
    // compare password hash
    if (!await user.checkPassword(password)) {
      return res.status(401).json({ message: 'Passoword incorrect' })
    }
    return res.json({
      user,
      token: user.generateToken()
    })
  } catch (err) {
    return res.json({ message: err })
  }
})

routes.get('/dashboard', (req, res) => {
  return res.status(200).send()
})

module.exports = routes
