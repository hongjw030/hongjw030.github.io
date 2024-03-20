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
        <Link href={el.id} color="inherit" underline="none" key={el.name}>
          <ListItemButton
            selected={current ? el.name === current : el.name === "HOME"}
          >
            <ListItemIcon>{el.icon}</ListItemIcon>
            <PageTitle title={el.name} fontSize={12} />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
}
