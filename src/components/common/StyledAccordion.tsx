import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { List, ListItem, ListItemButton } from "@mui/material";
import Link from "next/link";

interface CustomAccordionProps {
  title: string;
  subTitles: string[];
}

export default function StyledAccordion({
  title,
  subTitles,
}: CustomAccordionProps) {
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
          <Link href={`/${title}`} style={{ fontSize: "14px" }}>
            {title}
          </Link>
          {subTitles.length > 0 && (
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
        {subTitles.length > 0 && (
          <AccordionDetails>
            <List disablePadding>
              {subTitles.map((el) => {
                return (
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography fontSize={13}>{el}</Typography>
                    </ListItemButton>
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
