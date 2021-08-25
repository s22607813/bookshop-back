import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

import userRouter from './routes/users.js'
import productRouter from './routes/products.js'
import orderRouter from './routes/orders.js'
import fileRouter from './routes/files.js'

dotenv.config()

mongoose.connect(process.env.MONGO)

const app = express()

app.use(cors({
  origin (origin, callback) {
    if (process.env.DEV === 'true') {
      callback(null, true)
    } else {
      if (origin !== undefined && origin.includes('github')) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed'), false)
      }
    }
  }
}))

app.use((_, req, res, next) => {
  res.status(403).send({ success: false, message: '請求被拒絕' })
})

app.use(bodyParser.json())

app.use((_, req, res, next) => {
  res.status(400).send({ success: false, message: '內容格式錯誤' })
})

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/orders', orderRouter)
app.use('/files', fileRouter)

app.all('*', (req, res) => {
  res.status(404).send({ success: false, message: '找不到內容' })
})

app.listen(process.env.PORT, () => {
  console.log('server start')
})
