import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {type: String, default: ''},
  description: {type: String, default: ''},
  mainCategory: {type: String, default: ''},
  subCategory: {type: String, default: ''},
  coverImg: {type: String, default: ""},
  content: {type: String, default: ""},
},{
  timestamps: true,
})

const post = mongoose.models['post'] || mongoose.model('post', postSchema)

export default post;