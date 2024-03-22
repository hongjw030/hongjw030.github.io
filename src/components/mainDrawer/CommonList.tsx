import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "@mui/material";

import COMMON_ARRAY from "@/constants/commonCategory";
import { PageTitle } from "@/components/common/Titles";

interface CommonListProps {
  current?: string;
}

export default function CommonList({ current }: CommonListProps) {
  return (
    <List>
      {COMMON_ARRAY.map((el) => (
        <Link href={el.path} color="inherit" underline="none" key={el.title}>
          <ListItemButton
            selected={current ? el.title === current : el.title === "HOME"}
          >
            <ListItemIcon>{el.icon}</ListItemIcon>
            <PageTitle title={el.title} fontSize={12} />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
}
