import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import CustomInput from "../common/CustomInput";

export default function Nav() {
  const router = useRouter();
  const pathname = router.pathname;
  const { mainCategory, subCategory } = router.query;

  const currentLocation = mainCategory
    ? `Blog > ${mainCategory}${subCategory ? ` > ${subCategory}` : ""}`
    : pathname.slice(1);

  return (
    <Box
      position="sticky"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: "100%", height: "50px" }}
      top={0}
      right={0}
      left={0}
      borderBottom="1px solid #d9d9d9"
      p={1}
      bgcolor="#ffffff"
    >
      <Typography color="#333236" fontSize={13}>
        {currentLocation}
      </Typography>
      <CustomInput />
    </Box>
  );
}
