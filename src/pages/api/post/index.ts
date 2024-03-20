// 모든 포스트 조회

import dbConnect from "@/db/dbConnect";
import post from "@/db/models/post";

export default async function handler(req: any, res: any){
  await dbConnect();

  switch(req.method){
    case 'GET':
      const totalPost = await post.find().sort({"createdAt": -1});
      res.status(201).send(totalPost);
      break;
    case 'POST':
      const newData = await post.create(req.body);
      res.status(201).send(newData);
      break;
  }
}