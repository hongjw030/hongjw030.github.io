// 모든 포스트 조회

import dbConnect from "@/db/dbConnect";
import project from "@/db/models/project";

export default async function handler(req: any, res: any){
  await dbConnect();

  const {projectId} = req.query;
  const myPost = await project.findById(projectId);
  res.status(201).send(myPost);
}