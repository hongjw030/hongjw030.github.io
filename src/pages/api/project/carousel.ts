// 모든 포스트 조회

import dbConnect from "@/db/dbConnect";
import project from "@/db/models/project";

export default async function handler(req: any, res: any){
  await dbConnect();

  const totalPost = await project.find().sort({"createdAt": -1}).limit(10);
  res.status(201).send(totalPost);
}