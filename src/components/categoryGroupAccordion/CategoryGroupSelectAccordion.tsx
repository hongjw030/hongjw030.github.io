/** 카테고리 페이지에 들어가는 카테고리 그룹 컴포넌트 */

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
import { ReactNode } from "react";

import { MIN_WIDTH } from "@/constants";
import { CategoryGroupApiType } from "@/types/CategoryApiType";

interface CategorySelectButtonProps {
  title: string;
  mainCategory: string;
  subCategory?: string;
  onClick: any;
  children?: ReactNode;
}

interface CategoryGroupSelectAccordionProps {
  onClick: any;
  categoryGroup: CategoryGroupApiType;
}

function CategorySelectButton({
  title,
  mainCategory,
  subCategory,
  onClick,
  children,
}: CategorySelectButtonProps) {
  const handleClick = (e: any) => {
    const target = e.target;
    onClick((prev: any) => ({
      ...prev,
      mainCategory: target.getAttribute("data-mainid"),
      subCategory: target.getAttribute("data-subid"),
    }));
  };
  return (
    <Button
      onClick={handleClick}
      data-mainid={mainCategory}
      data-subid={subCategory}
      sx={{
        height: "40px",
      }}
    >
      {title}
      {children}
    </Button>
  );
}

export default function CategoryGroupSelectAccordion({
  onClick,
  categoryGroup,
}: CategoryGroupSelectAccordionProps) {
  const mainCategory = categoryGroup[0];
  const subCategoryList = categoryGroup[1];

  return (
    <Accordion
      sx={{
        width: MIN_WIDTH,
      }}
    >
      <CategorySelectButton
        title={mainCategory.title}
        mainCategory={mainCategory.path}
        onClick={onClick}
      >
        {subCategoryList && subCategoryList?.length > 0 && (
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon color="primary" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          ></AccordionSummary>
        )}
      </CategorySelectButton>

      <AccordionDetails>
        {subCategoryList &&
          subCategoryList?.map((subCategory) => {
            return (
              <CategorySelectButton
                title={subCategory.title}
                mainCategory={subCategory.groupPath}
                subCategory={subCategory.path}
                onClick={onClick}
                key={subCategory._id}
              />
            );
          })}
      </AccordionDetails>
    </Accordion>
  );
}
