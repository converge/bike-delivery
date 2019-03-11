const { factory } = require('factory-girl')
const { User } = require('../src/app/models')
const faker = require('faker')

// factory, model
factory.define('User', User, {
  email: faker.internet.email(),
  password: '123'
})

module.exports = factory