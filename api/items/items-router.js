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
  const [id] = req.params.id

  ItemsModel.getById(id)
            .then(item =>
              res.status(200).json(item)
            )
            .catch(next)
})

router.post('/', (req, res, next) => {
  res.status(201).json('item created')
})

router.post('/:id', (req, res, next) => {
  res.status(200).json('item requested')
})

router.put('/:id', (req, res, next) => {
  const { id } = req.params
  const { body } = req
  console.log('BODY: ', body)

  ItemsModel.update(id, body)
            .then(([item]) => {
              res.status(201).json(item)
            })
            .catch(next)
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
