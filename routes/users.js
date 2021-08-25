import express from 'express'
import auth from '../middleware/auth.js'
import {
  register,
  login,
  logout,
  getUser,
  addCart,
  delCart,
  getCart,
  getAllUser,
  extend,
  getUserInfo
} from '../controller/users.js'

const router = express.Router()

router.post('/', register)
router.get('/', auth, getUserInfo)
router.get('/all', getAllUser)
router.post('/login', login)
router.delete('/logout', auth, logout)
router.patch('/cart', auth, delCart)
router.post('/cart', auth, addCart)
router.get('/cart', auth, getCart)
router.get('/:id', getUser)
router.post('/extend', auth, extend)

export default router
