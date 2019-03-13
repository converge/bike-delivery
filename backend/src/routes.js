const routes = require('express').Router()
const AdminController = require('./app/controllers/AdminController')
const BikerController = require('./app/controllers/BikerController')
// const authMiddleware = require('./app/middleware/auth')

// Admin routes
routes.post('/admin', AdminController.store)
routes.get('/admin/list_parcels', AdminController.listParcels)
routes.get('/admin/parcel_detail', AdminController.parcelDetail)
routes.put('/admin/assign_parcel_to_biker', AdminController.assignParcelToBiker)
routes.put('/admin/unassign_parcel_to_biker', AdminController.unassignParcelToBiker)
routes.get('/admin/list_all_bikers', AdminController.listAllBikers)
// Admin special routes
routes.post('/admin/populate_users', AdminController.populateUsers)
routes.delete('/admin/delete_users', AdminController.deleteUsers)

// Biker routes
routes.get('/biker/list_parcels', BikerController.listParcels)
routes.get('/biker/parcel_detail', BikerController.parcelDetail)
routes.put('/biker/start_delivery', BikerController.startDelivery)
routes.put('/biker/end_delivery', BikerController.endDelivery)

// Authentication middleware
// routes.use(authMiddleware)

routes.get('/dashboard', (req, res) => {
  return res.status(200).send()
})
// routes.get('/dashboard', AdminController.dashboard)

module.exports = routes
