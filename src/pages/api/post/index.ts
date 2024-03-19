// 모든 포스트 조회

import dbConnect from "@/db/dbConnect";
import post from "@/db/models/post";

export default async function handler(req: any, res: any){
  await dbConnect();

  switch(req.method){
    case 'GET':
      const totalPost = await post.find();
      res.status(200).send(totalPost);
      break;
    case 'POST':
      const objectData = JSON.parse(req.body);
      const newData = await post.create(objectData);

      res.status(200).send(newData);
      break;
  }
}