const routes = require('express').Router()
const AdminController = require('./app/controllers/AdminController')
// const BikerController = require('./app/controllers/AdminController')
const authMiddleware = require('./app/middleware/auth')

// Controller / Routes 
routes.post('/admin', AdminController.store)
// routes.post('/biker', BikerController)

// Authentication middleware
routes.use(authMiddleware)

routes.get('/dashboard', (req, res) => {
  return res.status(200).send()
})
// routes.get('/dashboard', AdminController.dashboard)

module.exports = routes
