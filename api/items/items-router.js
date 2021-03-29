const router = require('express').Router()

//models
//middleware

router.get('/', (req, res, next) => {
  res.status(200).json('getAll Items')
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