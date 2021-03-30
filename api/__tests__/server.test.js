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
  it('.findById and returns user', async () => {
    const mickey = await Users.findById(1)
    expect(mickey).toEqual({
      user_id: 1,
      username: 'mickey',
      email: 'mickey@oneil.com'
    })
  })
  it('.findBy an object and returns user', async () => {
    const searchFor = { username: 'rick'}
    const rick = await Users.findBy(searchFor)
    expect(rick.email).toBe('rick@deckard.com')
  })
  it('.add to db and returns user', async () => {
    const motoko = {
      username: 'motoko',
      password: '1234',
      email: 'motoko@kusanagi.com'
    }
    await Users.add(motoko)
    expect(await db('users')).toHaveLength(4)
    const catchMotoko = (await db('users'))[3]
    expect(catchMotoko.username).toBe('motoko')
  })
})

describe('users-router.js', () => {
  test('[POST] /api/users/register returns user', async () => {
    const motoko = {
      username: 'motoko',
      password: '1234',
      email: 'motoko@kusanagi.com'
    }
    const res = await request(server)
      .post('/api/users/register')
      .send(motoko)
    expect(res.body).toMatchObject({
      user_id: 4,
      username: 'motoko',
      email: 'motoko@kusanagi.com'
    })
  })
  test('[POST] /api/users/login returns token', async () => {
    const motoko = {
      username: 'motoko',
      password: '1234',
      email: 'motoko@kusanagi.com'
    }
    await request(server)
      .post('/api/users/register')
      .send(motoko)
    const res = await request(server)
      .post('/api/users/login')
      .send(motoko)
    expect(res.body.token).toBeTruthy()
  })
})

describe('items-router.js', () => {
  test('[GET] /api/items returns all items', async () => {
    const items = await request(server)
      .get('/api/items')
    expect(items.body).toHaveLength(3)
    expect(items.body[2].item_name).toBe('camera')
  })
  test('[GET] /api/items/:id returns an object', async () => {
    const item = await request(server)
      .get('/api/items/2')
    expect(item.body).toMatchObject({
      item_id: 2,
      item_name: 'milkshake',
      item_price: '3.00',
      item_available: false,
      item_owner: 'rick'
    })
  })
})
