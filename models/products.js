import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, '品名不能為空'],
    minlength: [1, '品名不能為空']
  },
  description: {
    type: String,
    required: [true, '說明不能為空'],
    minlength: [1, '說明不能為空']
  },
  image: {
    type: String,
    required: [true, '圖片不能為空']
  },
  genre: {
    type: Number,
    required: [true, '類別不能為空']
  },
  checked: {
    type: Boolean,
    default: false
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
}, { versionKey: false })

export default mongoose.model('products', productSchema)
