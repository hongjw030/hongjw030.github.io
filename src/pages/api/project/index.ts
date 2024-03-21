// 모든 포스트 조회

import dbConnect from "@/db/dbConnect";
import project from "@/db/models/project";

export default async function handler(req: any, res: any){
  await dbConnect();

  const {count=10, cursor} = req.query;

  switch(req.method){
    case 'GET':
      const totalNumber = (await project.find())?.length;
      if (!cursor){
        const totalProject = await project.find().sort({"createdAt": -1}).limit(count);
        res.status(201).send({totalProject, totalNumber});
      }else{
        const totalProject = await project.find({_id: cursor}).sort({"createdAt": -1}).limit(count);
        res.status(201).send({totalProject, totalNumber});
      }
      break;
    case 'POST':
      const newData = await project.create(req.body);
      if (newData){
        res.status(201).send(newData);
      }else{
        res.status(403).send({ message: "creating project error!!"})
      }
      break;
  }
}