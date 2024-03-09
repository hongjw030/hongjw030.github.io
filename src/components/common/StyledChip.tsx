import { Chip, Link } from "@mui/material";
import React from "react";

interface StyledChipProps {
  label: string;
  size?: "small" | "medium";
  color?:
    | "default"
    | "secondary"
    | "primary"
    | "success"
    | "error"
    | "info"
    | "warning";
  url: string;
}

export default function StyledChip({
  label = "",
  size = "medium",
  color = "primary",
  url,
}: StyledChipProps) {
  return (
    <Chip
      size={size}
      label={label}
      color={color}
      component="a"
      href={url}
      clickable
    />
  );
}
