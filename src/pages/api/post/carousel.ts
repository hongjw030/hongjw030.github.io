// 모든 포스트 조회

import dbConnect from "@/db/dbConnect";
import post from "@/db/models/post";

export default async function handler(req: any, res: any){
  await dbConnect();

  const totalPost = await post.find().sort({"createdAt": -1}).limit(10);
  res.status(201).send(totalPost);
}