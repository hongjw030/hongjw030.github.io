// 현재 카테고리 위치

import { useQuery } from '@tanstack/react-query';

import { getCategoryData } from '@/apis/category';

export default function useGetCurrentCategoryLoc(mainPath?: string, subPath?: string) {
  const { data: categoryLocation, isLoading: categoryLocationIsLoading, error: categoryLocationError, isSuccess: categoryLocationIsSuccess } = useQuery({
    queryKey: ["category", mainPath, subPath],
    queryFn: () =>
      getCategoryData(mainPath as string, subPath as string | undefined),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!mainPath,
  });

  return {categoryLocation, categoryLocationIsLoading, categoryLocationError, categoryLocationIsSuccess}
}
