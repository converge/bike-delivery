'use strict';
const faker = require('faker')
const { User } = require('../../app/models')
// TODO: hardcode credentials for development only
const ADMIN_USERNAME = 'admin@admin.com'
const DEFAULT_PASSWORD = 'test#123'

module.exports = {
  /*
   * Create Users accounts (users table)
   */
  up: (queryInterface, Sequelize) => {
    let users = []
    // create admin
    users.push({
      id: 1,
      is_admin: 1,
      email: ADMIN_USERNAME,
      password: DEFAULT_PASSWORD,
      created_at: faker.date.past(),
      updated_at: faker.date.past()
    })

    // create random users
    for (let i = 2; i < 5; i++) {
      users.push({
        id: i,
        is_admin: 0,
        email: faker.internet.email(),
        password: DEFAULT_PASSWORD,
        created_at: faker.date.past(),
        updated_at: faker.date.past()
      })
    }
    // validate/individualHooks enable User model to be used on user creation
    return User.bulkCreate(users, {
      validate: true,
      individualHooks: true,
    })
  },

  /*
   * Undo Users account creation (users table)
   */
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [{
    }])
  }
};
