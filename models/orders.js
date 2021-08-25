import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  products: {
    type: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'products'
        }
      }
    ]
  },
  date: {
    type: Date,
    required: [true, '缺少訂單日期']
  }
}, { versionKey: false })

export default mongoose.model('orders', orderSchema)
