import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useRouter } from "next/router";

import { DateTag } from "@/components/common/Tags";
import { MIN_WIDTH } from "@/constants";
import { EMPTY_DESCRIPTION } from "@/constants/texts";
import { PUBLIC_SETTING_IMPORT } from "@/constants/links";
import { CardType, SmallCardType } from "@/types/CardType";

interface SmallCardProps extends SmallCardType {
  cardType: CardType;
}

export default function SmallCard({
  title,
  coverImg,
  createdAt,
  description,
  _id,
  cardType,
}: SmallCardProps) {
  const router = useRouter();

  return (
    <Card sx={{ width: MIN_WIDTH, padding: "15px", height: "300px" }}>
      <CardActionArea onClick={() => router.push(`/${cardType}/${_id}`)}>
        <CardMedia
          component="img"
          height="100"
          image={coverImg ?? `${PUBLIC_SETTING_IMPORT}/noImg.png`}
          alt={title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Box
            sx={{
              fontWeight: "700",
              fontSize: "20px",
              maxHeight: "55px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Box>
          <DateTag date={createdAt} />
          <Typography color="text.secondary" fontSize={12}>
            {description ? description : EMPTY_DESCRIPTION}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
