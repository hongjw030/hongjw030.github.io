import TOTAL_CATEGORY from "@/constants/category";
import StyledAccordion from "../common/StyledAccordion";

export default function BlogList() {
  return (
    <>
      {TOTAL_CATEGORY.map((el) => {
        return <StyledAccordion categoryGroup={el} key={el[0].mainId} />;
      })}
    </>
  );
}
