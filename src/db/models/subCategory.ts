import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  path: {type: String, default: ''},
  groupPath: {type: String, default: ''},
  title: {type: String, default: ''},
  description: {type: String, default: ''},
  note: {type: Number, default: 1},
  coverImg: {type: String, default: ""},
},{
  timestamps: true,
})

const subCategory = mongoose.models['subCategory'] || mongoose.model('subCategory', subCategorySchema)

export default subCategory;