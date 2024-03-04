import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { List, ListItem, ListItemButton } from "@mui/material";
import Link from "next/link";

import { CategoryGroupType } from "@/types/CategoryType";

interface CustomAccordionProps {
  categoryGroup: CategoryGroupType;
}

export default function StyledAccordion({
  categoryGroup,
}: CustomAccordionProps) {
  const mainCategory = categoryGroup[0];
  const subCategoryList = categoryGroup[1];

  return (
    <div>
      <Accordion elevation={0} disableGutters>
        <ListItemButton
          sx={{
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link
            href={`/blog/${mainCategory.mainId}`}
            style={{ fontSize: "14px" }}
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
                width: "60px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            ></AccordionSummary>
          )}
        </ListItemButton>
        {subCategoryList.length > 0 && (
          <AccordionDetails>
            <List disablePadding>
              {subCategoryList.map((subCategory) => {
                return (
                  <ListItem disablePadding key={subCategory.subId}>
                    <Link
                      href={`/blog/${mainCategory.mainId}/${subCategory.subId}`}
                      style={{ fontSize: "14px" }}
                    >
                      <ListItemButton>
                        <Typography fontSize={13}>
                          {subCategory.title}
                        </Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </AccordionDetails>
        )}
      </Accordion>
    </div>
  );
}
