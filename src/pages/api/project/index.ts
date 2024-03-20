// 모든 포스트 조회

import dbConnect from "@/db/dbConnect";
import project from "@/db/models/project";

export default async function handler(req: any, res: any){
  await dbConnect();

  switch(req.method){
    case 'GET':
      const totalPost = await project.find().sort({"createdAt": -1});
      res.setHeader("Cache-Control", "no-cache, no-store");
      res.setHeader("Pragma", "no-cache");
      res.status(200).send(totalPost);
      break;
    case 'POST':
      const newData = await project.create(req.body);
      res.setHeader("Cache-Control", "no-cache, no-store");
      res.setHeader("Pragma", "no-cache");
      res.status(200).send(newData);
      break;
  }
}