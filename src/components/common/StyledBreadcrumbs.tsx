import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { CategoryLink } from "@/components/common/Links";
import { POST_LINK } from "@/constants/links";
import { SubCategoryApiType } from "@/types/CategoryApiType";

export default function StyledBreadcrumbs({ ...data }: SubCategoryApiType) {
  if (!data) return;
  const breadcrumbs = [
    <CategoryLink
      title="BLOG"
      color="inherit"
      key="1"
      href={POST_LINK}
      fontSize={data.path ? 12 : 14}
    />,
    <CategoryLink
      title={data?.groupPath ? data?.groupPath : data?.title}
      key="2"
      href={`${POST_LINK}?mainPath=${
        data?.groupPath ? data?.groupPath : data?.path
      }`}
    />,
  ];

  if (data?.groupPath) {
    breadcrumbs.push(
      <CategoryLink
        title={data?.title}
        key="2"
        fontSize={14}
        href={`${POST_LINK}?mainPath=${data?.groupPath}&subPath=${data?.path}`}
      />
    );
  }

  return (
    <Stack>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
