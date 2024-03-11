import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CategoryGroupType } from "@/types/CategoryType";
import StyledCategoryListItem from "./StyledCategoryListItem";
import { Link } from "@mui/material";

interface CustomAccordionProps {
  categoryGroup: CategoryGroupType;
}

export default function StyledAccordion({
  categoryGroup,
}: CustomAccordionProps) {
  const mainCategory = categoryGroup.mainCategory;
  const subCategoryList = categoryGroup.subCategory;

  return (
    <div>
      <Accordion elevation={0} disableGutters>
        <StyledCategoryListItem>
          <Link
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
            href={`/blog/${mainCategory.id}`}
          >
            {mainCategory.title}
          </Link>
          {subCategoryList.length > 0 && (
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
        {subCategoryList.length > 0 && (
          <AccordionDetails>
            {subCategoryList.map((subCategory) => {
              return (
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  href={`/blog/${mainCategory.id}/${subCategory.id}`}
                  key={subCategory.id}
                >
                  <StyledCategoryListItem>
                    <Typography fontSize={13} color="#595959">
                      * {subCategory.title}
                    </Typography>
                  </StyledCategoryListItem>
                </Link>
              );
            })}
          </AccordionDetails>
        )}
      </Accordion>
    </div>
  );
}
