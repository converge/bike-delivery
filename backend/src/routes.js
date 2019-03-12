const routes = require('express').Router()
const AdminController = require('./app/controllers/AdminController')
const BikerController = require('./app/controllers/BikerController')
// const authMiddleware = require('./app/middleware/auth')

// Admin routes
routes.post('/admin', AdminController.store)
routes.get('/admin/list_parcels', AdminController.listParcels)
routes.put('/assign_parcel_to_biker', AdminController.assignParcelToBiker)
// Admin special routes
routes.post('/populate_users', AdminController.populateUsers)
routes.delete('/delete_users', AdminController.deleteUsers)

// Biker routes
routes.get('/biker/list_parcels', BikerController.listParcels)
routes.put('/biker/pickup_parcel', BikerController.pickUpParcel)
routes.put('/biker/delivery_end', BikerController.deliveryEnd)

// Authentication middleware
// routes.use(authMiddleware)

routes.get('/dashboard', (req, res) => {
  return res.status(200).send()
})
// routes.get('/dashboard', AdminController.dashboard)

module.exports = routes
