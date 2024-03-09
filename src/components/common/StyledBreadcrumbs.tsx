import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface StyledBreadcrumbsProps {
  mainId?: string;
  mainTitle?: string;
  subId?: string;
  subTitle?: string;
}

export default function StyledBreadcrumbs({
  mainId,
  mainTitle,
  subId,
  subTitle,
}: StyledBreadcrumbsProps) {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="white"
      href={`/blog`}
      fontSize={mainId ? 12 : 14}
    >
      BLOG
    </Link>,
  ];
  if (mainId) {
    breadcrumbs.push(
      <Link
        underline="hover"
        key="2"
        color="white"
        fontSize={subId ? 12 : 14}
        href={`/blog/${mainId}`}
      >
        {mainTitle}
      </Link>
    );
  }
  if (subId) {
    breadcrumbs.push(
      <Link
        underline="hover"
        key="2"
        color="white"
        fontSize={14}
        href={`/blog/${mainId}/${subId}`}
      >
        {subTitle}
      </Link>
    );
  }

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
