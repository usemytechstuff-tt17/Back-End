const router = require('express').Router()

const ItemsModel = require('./items-model')

const { restricted } = require('../users/users-middleware')

//middleware

router.get('/', (req, res, next) => {
  ItemsModel.getAll()
            .then(all => {
              res.status(200).json(all)
            })
            .catch(next)
})

router.get('/:id', restricted, (req, res, next) => {
  const { id } = req.params
  console.log("HERE: ", id)

  ItemsModel.getById(id)
            .then(item =>
              res.status(200).json(item)
            )
            .catch(next)
})

router.post('/', restricted, (req, res, next) => {
  ItemsModel.add(req.decodedJwt.user_id, req.body)
            .then(item => {
              res.status(201).json(item)
            })
            .catch(next)
})

router.put('/:id', restricted, (req, res, next) => {
  const { id } = req.params
  const { item_name, item_available, item_price, item_description } = req.body
  const cleanBody = {item_name, item_available, item_price, item_description}

  ItemsModel.update(id, cleanBody)
            .then(([item]) => {
              res.status(201).json(item)
            })
            .catch(next)
})

router.delete('/:id', (req, res, next) => {
  ItemsModel.del(req.params.id)
            .then(item => {
              res.status(200).json(item)
            })
            .catch(next)
})

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    custom: 'Error in items-router.js',
  })
})

module.exports = router
