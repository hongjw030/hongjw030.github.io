// 모든 카테고리 조회 api...

import dbConnect from "@/db/dbConnect";
import mainCategory from "@/db/models/mainCategory";
import subCategory from "@/db/models/subCategory";

export default async function handler(req: any, res: any){
  await dbConnect();

  const {mainPath, subPath} = req.query;
  
  switch(req.method){
    case 'GET': 
      if (!mainPath) {
        const mainCategoryData = await mainCategory.find();
        const promises =await Promise.all(mainCategoryData.map(async (el: any)=>{
          let subData = await subCategory.find({groupPath: el.path});
          return [el, [...subData]];
        }))
        res.status(201).send(promises);
      }
      if (mainPath && subPath){
        const subCategoryData = await subCategory.find({groupPath: mainPath, path: subPath});
        if (subCategoryData){
          res.status(201).send(subCategoryData[0])
        }else{
          res.status(404).send({message: "cannot search this subCategory!"})
        }
      }
      if (mainPath && !subPath){
        const mainCategoryData = await mainCategory.find({path: mainPath});
        if (mainCategoryData){
          res.status(201).send(mainCategoryData[0]);
        }else{
          res.status(404).send({message: "cannot search this mainCategory!"})
        }
      }

      break;
    case 'POST':
      const newData = req.body;
      if (newData.groupPath){
        const result = await subCategory.create(req.body);
        res.status(202).send(result)
      }else{
        const result = await mainCategory.create(req.body);
        res.status(202).send(result)
      }
      break;
  }

}