const { User } = require('../../src/app/models')
const bcrypt = require('bcryptjs')
const truncate = require('../utils/truncate')

describe('User', () => {
  beforeEach(async () => {
    await truncate()
  })
  it('it should encrypt user password', async () => {
    const user = await User.create({
      email: 'jp@ok.com',
      password: '123'
    })

    const compareHash = await bcrypt.compare('123', user.password) 

    expect(compareHash).toBe(true)
  })
})