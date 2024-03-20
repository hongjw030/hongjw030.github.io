// 모든 카테고리 조회 api...

import dbConnect from "@/db/dbConnect";
import mainCategory from "@/db/models/mainCategory";
import subCategory from "@/db/models/subCategory";

export default async function handler(req: any, res: any){
  await dbConnect();

  const mainCategoryData = await mainCategory.find();

  const promises =await Promise.all(mainCategoryData.map(async (el: any)=>{
    let subData = await subCategory.find({groupPath: el.path});
    return [el, [...subData]];
  }))
  res.setHeader("Cache-Control", "no-cache, no-store");
  res.setHeader("Pragma", "no-cache");
  res.status(200).send(promises);
}