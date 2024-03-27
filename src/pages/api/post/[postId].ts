// 포스트 수정용 api

import dbConnect from "@/db/dbConnect";
import post from "@/db/models/post";

export default async function handler(req: any, res: any){
  await dbConnect();
  const {postId} = req.query;

  switch(req.method){
    case 'PATCH': 
      const updatedMyPost = await post.findByIdAndUpdate(postId, req.body);
      res.status(201).send({message: "update success!", data: updatedMyPost })
      break;
    case 'GET': 
      const myPost = await post.findById(postId);
      res.status(201).send(myPost);
      break;
    case 'DELETE':
      await post.findByIdAndDelete(postId);
      res.status(204).send({message: "deleted Success!!"});
      break;
  }
}