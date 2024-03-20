import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";

import StyledCategoryListItem from "@/components/common/StyledCategoryListItem";
import { CategoryLink } from "@/components/common/Links";
import { CategoryGroupApiType } from "@/types/CategoryApiType";

interface CustomAccordionProps {
  categoryGroup: CategoryGroupApiType;
}

export default function CategoryGroupSidebarAccordion({
  categoryGroup,
}: CustomAccordionProps) {
  const mainCategory = categoryGroup[0];
  const subCategoryList = categoryGroup[1];

  return (
    <Box>
      <Accordion>
        <StyledCategoryListItem>
          <CategoryLink
            title={`${mainCategory.title}`}
            href={`/blog/${mainCategory.path}`}
          />
          {subCategoryList && subCategoryList?.length > 0 && (
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                padding: 0,
                display: "flex",
                justifyContent: "flex-end",
              }}
            ></AccordionSummary>
          )}
        </StyledCategoryListItem>
        {subCategoryList && subCategoryList?.length > 0 && (
          <AccordionDetails>
            {subCategoryList.map((subCategory) => {
              return (
                <StyledCategoryListItem key={subCategory._id}>
                  <CategoryLink
                    title={`* ${subCategory.title}`}
                    href={`/blog/${mainCategory.path}/${subCategory.path}`}
                    color="#595959"
                  />
                </StyledCategoryListItem>
              );
            })}
          </AccordionDetails>
        )}
      </Accordion>
    </Box>
  );
}
