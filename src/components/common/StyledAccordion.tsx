import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StyledCategoryListItem from "./StyledCategoryListItem";
import { Link } from "@mui/material";
import { CategoryGroupApiType } from "@/types/CategoryApiType";

interface CustomAccordionProps {
  categoryGroup: CategoryGroupApiType;
}

export default function StyledAccordion({
  categoryGroup,
}: CustomAccordionProps) {
  const mainCategory = categoryGroup[0];
  const subCategoryList = categoryGroup[1];

  return (
    <div>
      <Accordion elevation={0} disableGutters>
        <StyledCategoryListItem>
          <Link
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
            href={`/blog/${mainCategory.path}`}
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
                  href={`/blog/${mainCategory.path}/${subCategory.path}`}
                  key={subCategory._id}
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
