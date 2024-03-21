/** 카테고리 페이지에 들어가는 카테고리 그룹 컴포넌트 */

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, ListItem } from "@mui/material";
import TopicIcon from "@mui/icons-material/Topic";
import TabIcon from "@mui/icons-material/Tab";

import { MIN_WIDTH } from "@/constants";
import { CategoryGroupApiType } from "@/types/CategoryApiType";
import { getCategoryPostQueryLink } from "@/utils/getQueryLink";

interface CategoryGroupAccordionProps {
  categoryGroup: CategoryGroupApiType;
}

export default function CategoryGroupAccordion({
  categoryGroup,
}: CategoryGroupAccordionProps) {
  const mainCategory = categoryGroup[0];
  const subCategoryList = categoryGroup[1];

  const mainCategoryLink = getCategoryPostQueryLink(mainCategory.path);

  return (
    <Accordion
      elevation={2}
      sx={{
        minWidth: MIN_WIDTH,
        width: "50vw",
      }}
    >
      <ListItem
        sx={{
          display: "flex",
          height: "64px",
          justifyContent: "space-between",
          backgroundColor: "rgba(25, 118, 210, 0.08)",
        }}
      >
        <Link
          underline="hover"
          sx={{
            textDecoration: "none",
            display: "flex",
            gap: "5px",
          }}
          href={mainCategoryLink}
        >
          <TopicIcon />
          {mainCategory.title}
        </Link>

        {subCategoryList && subCategoryList?.length > 0 && (
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon color="primary" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          ></AccordionSummary>
        )}
      </ListItem>

      <AccordionDetails
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
        }}
      >
        {subCategoryList &&
          subCategoryList?.map((subCategory) => {
            return (
              <Link
                underline="hover"
                sx={{
                  fontSize: "15px",
                  display: "flex",
                  gap: "5px",
                  textDecoration: "none",
                  color: "inherit",
                }}
                href={
                  subCategory.path !== "noTag"
                    ? `${mainCategoryLink}&subPath=${subCategory.path}`
                    : mainCategoryLink
                }
                key={subCategory._id}
              >
                <TabIcon color="primary" />
                {subCategory.title}
              </Link>
            );
          })}
      </AccordionDetails>
    </Accordion>
  );
}
