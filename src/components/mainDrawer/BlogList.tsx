import StyledAccordion from "@/components/common/StyledAccordion";

interface BlogListProps {
  categoryData?: Array<any>;
}
export default function BlogList({ categoryData }: BlogListProps) {
  return (
    <>
      {categoryData &&
        categoryData.length > 0 &&
        categoryData.map((el) => {
          return <StyledAccordion categoryGroup={el} key={el[0]?.id} />;
        })}
    </>
  );
}
