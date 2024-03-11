import { Link, ListItemButton } from "@mui/material";
import { ReactNode } from "react";

interface StyledCategoryListItemProps {
  children: ReactNode;
}

function StyledCategoryListItem({ children }: StyledCategoryListItemProps) {
  return (
    <ListItemButton
      sx={{
        fontSize: "14px",
        height: "40px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {children}
    </ListItemButton>
  );
}

export default StyledCategoryListItem;
