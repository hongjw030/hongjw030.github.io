import StyledAccordion from "@/components/common/StyledAccordion";
import { Link, ListItem } from "@mui/material";

interface BlogListProps {
  categoryData?: Array<any>;
}
export default function BlogList({ categoryData }: BlogListProps) {
  return (
    <>
      <ListItem>
        <Link href="/blog" underline="none" color="inherit" fontSize={13}>
          전체보기{" "}
        </Link>
      </ListItem>
      {categoryData &&
        categoryData.length > 0 &&
        categoryData.map((el) => {
          return <StyledAccordion categoryGroup={el} key={el[0]?.id} />;
        })}
    </>
  );
}
