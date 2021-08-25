import express from 'express'
import auth from '../middleware/auth.js'
import {
  checkout,
  getOrders,
  getAllOrders
} from '../controller/orders.js'

const router = express.Router()

router.post('/', auth, checkout)
router.get('/', auth, getOrders)
router.get('/all', auth, getAllOrders)

export default router
