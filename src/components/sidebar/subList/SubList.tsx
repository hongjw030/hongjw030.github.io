import CustomAccordion from "@/components/common/CustomAccordion";
import CATEGORIES from "@/posts/CategoryList";

export default function SubList() {
  return (
    <>
      {CATEGORIES.map((el) => {
        return (
          <CustomAccordion
            key={el.id}
            title={el.title}
            subTitles={el.subTitles}
          />
        );
      })}
    </>
  );
}
