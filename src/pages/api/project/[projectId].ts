// 모든 포스트 조회

import dbConnect from "@/db/dbConnect";
import project from "@/db/models/project";

export default async function handler(req: any, res: any){
  await dbConnect();

  const {projectId} = req.query;

  switch(req.method){
    case 'PATCH': 
      const updatedMyPost = await project.findByIdAndUpdate(projectId, req.body);
      res.status(201).send({message: "update success!", data: updatedMyPost })
      break;
    case 'GET': 
      const myPost = await project.findById(projectId);
      res.status(201).send(myPost);
      break;
    case 'DELETE':
      await project.findByIdAndDelete(projectId);
      res.status(204).send({message: "deleted Success!!"});
      break;
  }
}