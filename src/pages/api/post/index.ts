// 포스트 리스트 조회

import dbConnect from "@/db/dbConnect";
import post from "@/db/models/post";

export default async function handler(req: any, res: any){
  await dbConnect();

  const {mainPath, subPath, count, cursor} = req.query;
  switch(req.method){
    case 'GET':
      if (!mainPath){
        // 전체 포스트 리스트 조회
        const totalNumber = (await post.find())?.length;
        if (!cursor){
          const totalPost = await post.find().sort({"createdAt": -1}).limit(count);
          res.status(201).send({totalPost, totalNumber});
        }else{
          const totalPost = await post.find({_id: cursor}).sort({"createdAt": -1}).limit(count);
          res.status(201).send({totalPost, totalNumber});
        }
      }
      else if (mainPath && !subPath){
        // 메인카테고리 포스트 리스트 조회
        const totalNumber = (await post.find({mainCategory: mainPath}))?.length;
        if (!cursor){
          const totalPost = await post.find({mainCategory: mainPath}).sort({"createdAt": -1}).limit(count);
          res.status(201).send({totalPost, totalNumber});
        }else{
          const totalPost = await post.find({mainCategory: mainPath, _id: cursor}).sort({"createdAt": -1}).limit(count);
          res.status(201).send({totalPost, totalNumber});
        }
      }else if (mainPath && subPath){
        // 메인카테고리 + 서브 카테고리 포스트 리스트 조회
        const totalNumber = (await post.find({mainCategory: mainPath, subCategory: subPath}))?.length;
        if (!cursor){
          const totalPost = await post.find({mainCategory: mainPath, subCategory: subPath}).sort({"createdAt": -1}).limit(count);
          res.status(201).send({totalPost, totalNumber});
        }else{
          const totalPost = await post.find({mainCategory: mainPath, subCategory: subPath, _id: cursor}).sort({"createdAt": -1}).limit(count);
          res.status(201).send({totalPost, totalNumber});
        }
      }else{
        // 메인 카테고리 없이 서브 카테고리만 쓰면 에러.
        res.status(403).send({message: "you should set mainPath and subPath together, not only subPath."})
      }
      break;

    case 'POST':
      const newData = await post.create(req.body);
      if (newData){
        res.status(201).send(newData);
      }else{
        res.status(400).send({message: "creating post error!!"})
      }
      break;
  }
}