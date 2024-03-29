import { CategoryLink } from "@/components/common/Links";
import StyledCategoryListItem from "@/components/common/StyledCategoryListItem";
import CategoryGroupSidebarAccordion from "@/components/categoryGroupAccordion/CategoryGroupSidebarAccordion";
import { POST_LINK } from "@/constants/links";
import { CategoryListApiType } from "@/types/CategoryApiType";

interface BlogListProps {
  categoryList: CategoryListApiType;
}

export default function BlogList({ categoryList }: BlogListProps) {
  return (
    <>
      <StyledCategoryListItem>
        <CategoryLink title="전체 보기" href={POST_LINK} />
      </StyledCategoryListItem>

      {categoryList.map((el) => {
        return (
          <CategoryGroupSidebarAccordion categoryGroup={el} key={el[0]._id} />
        );
      })}
    </>
  );
}
