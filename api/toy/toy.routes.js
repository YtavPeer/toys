const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')

const { getToys, getToyById, addToy, deleteToy, updateToy, addReview } = require('./toy.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)
router.get('/', log, getToys)
router.get('/:id', log, getToyById)
router.post('/',requireAuth,requireAdmin, addToy)
router.post('/:id/review',requireAuth, addReview)
router.delete('/:id',requireAuth,requireAdmin, deleteToy)
router.put('/:id',requireAuth,requireAdmin, log, updateToy)

module.exports = router