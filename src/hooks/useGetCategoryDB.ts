import {
  getCategoryCollectionDB,
  getSubCategoryCollectionDb,
} from "@/firebase/firebaseFetcher/getCategoryDB";

export default async function useGetCategoryDB() {
  let totalArray: Array<any> = [];

  const MainData = await getCategoryCollectionDB();
  for(const el of MainData){
    const my = await getSubCategoryCollectionDb(el.id);
    totalArray.push([el, my]);
  }
  return totalArray;
}