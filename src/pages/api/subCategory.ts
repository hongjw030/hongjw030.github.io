// 서브 카테고리 조회 및 생성 api

import dbConnect from "@/db/dbConnect";
import subCategory from "@/db/models/subCategory";

export default async function handler(req: any, res: any){
  await dbConnect();

  switch(req.method){
    case 'GET':
      const categoryData = await subCategory.find();
      res.status(200).send(categoryData);
      break;
    case 'POST':
      const reqData = await req.body;
      const jsonData =JSON.parse(reqData);
      const newData = await subCategory.create(jsonData);
      res.status(201).send(newData);
      break;
  }
}