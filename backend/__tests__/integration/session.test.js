const app = require('../../src/app')
const request = require('supertest')
const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')
const factory = require('../factories')


describe('Authentication', () => {

  beforeEach(async () => {
    await truncate()
  })

  it('should authenticate with valid credentials', async () => {
    // create user using factory and set new password    
    const user = await factory.create('User', {
      password: '123'
    })
    const response = await request(app).post('/admin').send({
      email: user.email,
      password: '123'
    })
    expect(response.status).toBe(200)
  })

  it('should not authenticate with invalid credentials', async () => {
    // create user using factory and set new password    
    const user = await factory.create('User', {
      password: '123'
    })
    const response = await request(app).post('/admin').send({
      email: user.email,
      password: '1234'
    })
    expect(response.status).toBe(401)
  })

  it('should return JWT Token when authenticated', async () => {
    // create user using factory and set new password
    const user = await factory.create('User', {
      password: '123'
    })
    const response = await request(app).post('/admin').send({
      email: user.email,
      password: '123'
    })
    expect(response.body).toHaveProperty('token')
  })

  it('should be able to access private route when authenticated', async () => {
    // create user using factory and set new password
    const user = await factory.create('User', {
      password: '123'
    })
    const response = await request(app).get('/dashboard').set('Authorization', `Bearer ${user.generateToken()}`)
    expect(response.status).toBe(200)
  })

  // TODO:
  // it('should not be able to access private routes without jwt token', async () => {
  //   const response = await request(app).get('/dashboard')
  //   expect(response.status).toBe(401)
  // })

  // it('should not be able to access private routes with invalid JWT Token', async () => {
  //   const response = await request(app).get('/dashboard').set('Authorization', `Bearer 123123`)
  //   expect(response.status).toBe(401)
  // })
})