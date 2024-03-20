import { ListItemButton } from "@mui/material";
import { ReactNode } from "react";

interface StyledCategoryListItemProps {
  children: ReactNode;
}

function StyledCategoryListItem({ children }: StyledCategoryListItemProps) {
  return (
    <ListItemButton
      sx={{
        height: "45px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {children}
    </ListItemButton>
  );
}

export default StyledCategoryListItem;
