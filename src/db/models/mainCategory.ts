import mongoose from "mongoose";

const mainCategorySchema = new mongoose.Schema({
  path: {type: String, default: ''},
  title: {type: String, default: ''},
  description: {type: String, default: ''},
  note: {type: Number, default: 1},
  coverImg: {type: String, default: ""},
},{
  timestamps: true,
})

const mainCategory = mongoose.models['mainCategory'] || mongoose.model('mainCategory', mainCategorySchema)

export default mainCategory;