import express from 'express'
import auth from '../middleware/auth.js'
import upload from '../middleware/upload.js'
import {
  newProduct,
  getAllProduct,
  getProduct,
  checkProduct,
  getProductGenre,
  getProductById
} from '../controller/products.js'

const router = express.Router()

router.post('/', auth, upload, newProduct)
router.get('/', getAllProduct)
router.get('/:id', getProductById)
router.patch('/:id', auth, checkProduct)
router.get('/from/:from', auth, getProduct)
router.get('/genre/:genre', getProductGenre)

export default router
