'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    // all parcel status
    // let status = ['waiting', 'assigned', 'picked_up', 'delivered']
    let parcelSeeds = []
    let aux = {}
    for(let i=0; i < 50; i++) {
      aux = {
        // faker data
        // user_id: faker.random.number({ 'min': 2, 'max': 10 }),
        origin: `${faker.address.streetName()} - ${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.country()},`,
        destination: `${faker.address.streetName()} - ${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.country()},`,
        // sample a parcel
        // status: status[Math.floor(Math.random()*status.length)],
        status: 'waiting',
        created_at: faker.date.past(),
        updated_at: faker.date.past()
      }
      parcelSeeds.push(aux)
    }
    return queryInterface.bulkInsert('parcels', parcelSeeds, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('parcels', [{
    }])
  }
};
