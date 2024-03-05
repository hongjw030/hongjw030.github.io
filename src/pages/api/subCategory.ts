// 전체 카테고리 값을 받아오는 api

import { NextApiRequest, NextApiResponse } from "next";

const mysql = require('mysql2');

const conn = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 300,
  queueLimit: 0,
}

const pool = mysql.createPool(conn);
const connection = pool.promise();

export default async function handleGetCategory(req: NextApiRequest, res: NextApiResponse) {
  const [subCategoryData] = await connection.query('select * from subcategory');

  if (subCategoryData && subCategoryData.length > 0 ){
    res.status(200).send({data: subCategoryData});
  }else{
    res.status(400).send({message:"error in categoryApi"});
  }

}
