import { query, orderBy, collection, getDocs } from "firebase/firestore";
import fireStore from '@/firebase/fireStore';
import { CategoryApiType, MainCategoryApiType } from "@/types/CategoryType";

// categoryCollection 하위 문서들을 모두 리턴 즉, 메인 카테고리 객체들을 리턴해줌.
export const getCategoryCollectionDB = async()=>{
  try{
    const q = query(collection(fireStore, "categoryCollection"), orderBy("note"));
    const querySnapshot = await getDocs(q);
    const categoryData: Array<CategoryApiType> = [];

    querySnapshot.forEach((doc) => {
    const mainCategoryObj = {id: doc.id , ...doc.data()};
    categoryData.push(mainCategoryObj as CategoryApiType);
  });
  return categoryData;
  }
  catch(e){
    throw new Error();
  }
}

export const getSubCategoryCollectionDb = async(mainId: string)=>{
  try{

    const q = query(collection(fireStore, `categoryCollection/${mainId}/${mainId}Collection`), orderBy("note"));
    const querySnapshot = await getDocs(q);
    const categoryData: Array<any>  = [];
    
    querySnapshot.forEach((doc) => {
      const categoryObj = {id: doc.id, ...doc.data()};
      categoryData.push(categoryObj);
    });
    return categoryData;
  }catch (e){
    throw new Error();
  }
}