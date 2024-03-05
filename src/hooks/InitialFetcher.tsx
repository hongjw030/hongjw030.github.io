import { useQuery } from "@tanstack/react-query";

import { getMainCategoryList, getSubCategoryList } from "@/fetcher/category";
import { MainCategoryApiType, SubCategoryApiType } from "@/types/CategoryType";

export default function useGetCategoryData() {
  let categoryData: Array<any> = [];

  const {
    data: mainData,
    isLoading: mainIsLoading,
    isSuccess: mainIsSuccess,
  } = useQuery({
    queryKey: ["main-category-key"],
    queryFn: () => getMainCategoryList(),
    staleTime: Infinity,
    gcTime: Infinity,
  });
  const {
    data: subData,
    isLoading: subIsLoading,
    isSuccess: subIsSuccess,
  } = useQuery({
    queryKey: ["sub-category-key"],
    queryFn: () => getSubCategoryList(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (mainData && subData && !mainIsLoading && !subIsLoading) {
    mainData.data.map((el: MainCategoryApiType) => {
      categoryData.push([el, []]);
    });
    if (categoryData.length > 0) {
      subData.data.map((el: SubCategoryApiType) => {
        categoryData[el.mainId - 1][1].push(el);
      });
    }
  }

  return {
    mainData,
    subData,
    categoryData,
    mainIsLoading,
    subIsLoading,
    mainIsSuccess,
    subIsSuccess,
  };
}
