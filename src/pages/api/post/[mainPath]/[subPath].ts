// 모든 포스트 조회

import dbConnect from "@/db/dbConnect";
import post from "@/db/models/post";

export default async function handler(req: any, res: any){
  await dbConnect();

  const {mainPath, subPath} = req.query;
  const totalPost = await post.find({mainCategory: mainPath, subCategory: subPath}).sort({"createdAt": -1});
  res.status(200).send(totalPost);
}