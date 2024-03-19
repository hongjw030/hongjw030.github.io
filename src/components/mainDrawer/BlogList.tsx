import StyledAccordion from "@/components/common/StyledAccordion";
import { CategoryListApiType } from "@/types/CategoryApiType";
import { Link, ListItem } from "@mui/material";

interface BlogListProps {
  categoryList: CategoryListApiType;
}

export default function BlogList({ categoryList }: BlogListProps) {
  return (
    <>
      <ListItem>
        <Link href="/blog" underline="none" color="inherit" fontSize={13}>
          전체보기
        </Link>
      </ListItem>
      {categoryList.map((el) => {
        return <StyledAccordion categoryGroup={el} key={el[0]._id} />;
      })}
    </>
  );
}
