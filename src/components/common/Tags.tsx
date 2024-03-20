import { Box, Typography } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ClassIcon from "@mui/icons-material/Class";

import formatDate from "@/utils/formatDate";

interface DateTagProps {
  label?: string;
  date: string;
  fontSize?: number;
}

interface CategoryTagProps {
  mainCategory: string;
  subCategory?: string;
  fontSize?: number;
}

export function DateTag({ label, date, fontSize = 10 }: DateTagProps) {
  return (
    <Box fontSize={fontSize} display="flex" alignItems="center" gap="5px">
      {label ?? (
        <EventAvailableIcon sx={{ fontSize: "13px" }} color="primary" />
      )}
      {formatDate(date)}
    </Box>
  );
}

export function CategoryTag({
  mainCategory,
  subCategory,
  fontSize = 10,
}: CategoryTagProps) {
  const categoryText = subCategory
    ? `${mainCategory}, ${subCategory}`
    : `${mainCategory}`;
  return (
    <Box fontSize={fontSize}>
      <ClassIcon sx={{ fontSize: "13px" }} color="primary" />
      {categoryText}
    </Box>
  );
}
