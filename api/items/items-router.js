const router = require('express').Router()

const ItemsModel = require('./items-model')

const { restricted } = require('../users/users-middleware')

//middleware

router.get('/', restricted, (req, res, next) => {
  ItemsModel.getAll()
            .then(all => {
              res.status(200).json(all)
            })
            .catch(next)
})

router.get('/:id', (req, res, next) => {
  res.status(200).json('some item')
})

router.post('/', (req, res, next) => {
  res.status(201).json('item created')
})

router.post('/:id', (req, res, next) => {
  res.status(200).json('item requested')
})

router.put('/:id', (req, res, next) => {
  res.status(200).json('item changed')
})

router.delete('/:id', (req, res, next) => {
  res.status(200).json('item deleted')
})

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    custom: 'Error in items-router.js',
  })
})

module.exports = router
