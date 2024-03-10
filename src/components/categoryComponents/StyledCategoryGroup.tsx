import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CategoryGroupNumType } from "@/types/CategoryType";
import { Box, Link, ListItem } from "@mui/material";
import { MIN_WIDTH } from "@/constants";

interface CustomAccordionProps {
  categoryGroup: CategoryGroupNumType;
}

function CategoryLabel({ title = "", count = 0, color = "inherit" }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        justifyContent: "flex-start",
        alignItems: "flex-end",
      }}
    >
      <Box fontSize={16} fontWeight={600} color={color}>
        {title}
      </Box>
      <Box fontSize={13} fontWeight={300} color={color}>
        ... {count} posts
      </Box>
    </Box>
  );
}

export default function StyledCategoryGroup({
  categoryGroup,
}: CustomAccordionProps) {
  const mainCategory = categoryGroup.mainCategory;
  const subCategoryList = categoryGroup.subCategory;

  return (
    <Accordion
      elevation={2}
      sx={{
        maxWidth: "500px",
        minWidth: MIN_WIDTH,
      }}
    >
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
          }}
          href={`/blog/${mainCategory.id}`}
        >
          <CategoryLabel
            title={mainCategory.title}
            count={mainCategory.count}
          />
        </Link>
        {subCategoryList.length > 0 && (
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon color="primary" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          ></AccordionSummary>
        )}
      </ListItem>
      <AccordionDetails>
        {subCategoryList.map((subCategory) => {
          return (
            <Link
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
              href={
                subCategory.id !== "noTag"
                  ? `/blog/${mainCategory.id}/${subCategory.id}`
                  : `/blog/${mainCategory.id}`
              }
              key={subCategory.id}
            >
              <ListItem>
                <CategoryLabel
                  title={subCategory.title}
                  count={subCategory.count}
                />
              </ListItem>
            </Link>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}
