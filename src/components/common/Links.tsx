import { Link } from "@mui/material";

interface CategoryLinkProps {
  href: string;
  title: string;
  color?: string;
  fontSize?: number;
}

export function CategoryLink({
  href,
  title,
  color = "inherit",
  fontSize = 14,
}: CategoryLinkProps) {
  return (
    <Link
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
