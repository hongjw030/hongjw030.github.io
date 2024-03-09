import StyledAccordion from "@/components/common/StyledAccordion";
import CATEGORY_ARRAY from "@/constants/category";
import { Link, ListItem } from "@mui/material";

export default function BlogList() {
  return (
    <>
      <ListItem>
        <Link href="/blog" underline="none" color="inherit" fontSize={13}>
          전체보기{" "}
        </Link>
      </ListItem>
      {CATEGORY_ARRAY.map((el) => {
        return <StyledAccordion categoryGroup={el} key={el.mainCategory.id} />;
      })}
    </>
  );
}
