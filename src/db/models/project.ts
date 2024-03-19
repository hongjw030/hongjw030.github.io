import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {type: String, default: ''},
  description: {type: String, default: ''},
  coverImg: {type: String, default: ""},
  content: {type: String, default: ""},
},{
  timestamps: true,
})

const project = mongoose.models['project'] || mongoose.model('project', projectSchema)

export default project;