import { Link, Button, Tooltip } from "@mui/material";
import { ReactNode } from "react";
interface CategoryLinkProps {
  href: string;
  title: string;
  color?: string;
  fontSize?: number;
}

interface TooltipLinkButtonProps {
  tooltip: string;
  href: string;
  text: string;
  icon: ReactNode;
  width?: number;
}

export function CategoryLink({
  href,
  title,
  color = "inherit",
  fontSize = 14,
}: CategoryLinkProps) {
  return (
    <Link
      underline="hover"
      sx={{
        textDecoration: "none",
        color: color,
      }}
      fontSize={fontSize}
      href={href}
    >
      {title}
    </Link>
  );
}

export function TooltipLinkButton({
  tooltip,
  href,
  text,
  icon,
}: TooltipLinkButtonProps) {
  return (
    <Tooltip title={tooltip}>
      <Button
        variant="outlined"
        href={href}
        sx={{
          display: "flex",
          gap: "5px",
          whiteSpace: "nowrap",
          minWidth: "200px",
        }}
        target="_blank"
      >
        {icon}
        {text}
      </Button>
    </Tooltip>
  );
}
