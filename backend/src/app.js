require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})
const express = require('express')
const cors = require('cors')

class AppController {
  constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    // JSON
    this.express.use(express.json())
    this.express.use(cors({
      credentials: true, origin: true
    }))
  }

  routes() {
    // Instantiate routes
    this.express.use(require('./routes'))
  }
}

module.exports = new AppController().express