// 모든 포스트 조회

import dbConnect from "@/db/dbConnect";
import post from "@/db/models/post";

export default async function handler(req: any, res: any){
  await dbConnect();

  switch(req.method){
    case 'GET':
      const totalPost = await post.find().sort({"createdAt": -1});
      res.setHeader("Cache-Control", "no-cache, no-store");
      res.setHeader("Pragma", "no-cache");
      res.status(200).send(totalPost);
      break;
    case 'POST':
      const newData = await post.create(req.body);
      res.setHeader("Cache-Control", "no-cache, no-store");
      res.setHeader("Pragma", "no-cache");
      res.status(200).send(newData);
      break;
  }
}