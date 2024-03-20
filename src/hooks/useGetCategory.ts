// 카테고리 전체 리스트를 조회하는 api를 실행해 카테고리 데이터를 넘겨주는 훅

import { getCategoryList } from "@/apis/category";
import { CategoryListApiType } from "@/types/CategoryApiType";
import { useQuery } from "@tanstack/react-query";

function useGetCategory() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["category-key"],
    queryFn: () => getCategoryList(),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const returnData: {data: CategoryListApiType, isLoading: boolean, isError: boolean} = {
    data, isLoading, isError
  }

  return { ...returnData };
}

export default useGetCategory;
