import { useQuery } from "@tanstack/react-query";

import StyledAccordion from "@/components/common/StyledAccordion";
import { getMainCategoryList, getSubCategoryList } from "@/fetcher/category";
import { MainCategoryApiType, SubCategoryApiType } from "@/types/CategoryType";

export default function BlogList() {
  let categoryData: Array<any> = [];
  const { data: mainData, isLoading: mainIsLoading } = useQuery({
    queryKey: ["main-category-key"],
    queryFn: () => getMainCategoryList(),
  });
  const { data: subData, isLoading: subIsLoading } = useQuery({
    queryKey: ["sub-category-key"],
    queryFn: () => getSubCategoryList(),
  });

  if (mainData && subData) {
    mainData.data.map((el: MainCategoryApiType) => {
      categoryData.push([el, []]);
    });
    if (categoryData.length > 0) {
      subData.data.map((el: SubCategoryApiType) => {
        categoryData[el.mainId - 1][1].push(el);
      });
    }
  }

  return (
    <div>
      {categoryData &&
        categoryData.length > 0 &&
        categoryData.map((el) => {
          return <StyledAccordion categoryGroup={el} key={el[0]?.id} />;
        })}
    </div>
  );
}
