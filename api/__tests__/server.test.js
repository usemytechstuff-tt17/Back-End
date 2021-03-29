const request = require('supertest')
const server = require('../server')
const db = require('../data/db-config')

const Users = require('../users/users-model')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async (done) => {
  await db.destroy()
  done()
})

it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  it('is the correct testing environment', async () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })
})

describe('users-model.js', () => {
  it('findById and returns user', async () => {
    const mickey = await Users.findById(1)
    expect(mickey).toEqual({
      user_id: 1,
      user_username: 'mickey',
      user_email: 'mickey@oneil.com'
    })
  })
  it('add to db and returns user', async () => {
    const motoko = {
      user_username: 'motoko',
      user_password: '1234',
      user_email: 'motoko@kusanagi.com'
    }
    await Users.add(motoko)
    expect(await db('users')).toHaveLength(4)
    const catchMotoko = (await db('users'))[3]
    expect(catchMotoko.user_username).toBe('motoko')
  })
})

describe('users-router.js', () => {
  test('[POST] /api/users/register returns user', async () => {
    const motoko = {
      user_username: 'motoko',
      user_password: '1234',
      user_email: 'motoko@kusanagi.com'
    }
    const res = await request(server)
      .post('/api/users/register')
      .send(motoko)
    expect(res.body).toMatchObject({
      user_id: 4,
      user_username: 'motoko',
      user_email: 'motoko@kusanagi.com'
    })
  })
})
