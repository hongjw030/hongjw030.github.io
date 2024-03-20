import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {type: String, default: ''},
  description: {type: String, default: ''},
  coverImg: {type: String, default: ""},
  content: {type: String, default: ""},
  developmentUrl: {type: String, default: ""},
  githubUrl: {type: String, default: ""},
  functions: {type: String, default: ""},
  note: {type: Number, default: 1},
  term: {type: String, default: ""},
  isTeam: {type: String, default: "개인 프로젝트"},
},{
  timestamps: true,
})

const project = mongoose.models['project'] || mongoose.model('project', projectSchema)

export default project;