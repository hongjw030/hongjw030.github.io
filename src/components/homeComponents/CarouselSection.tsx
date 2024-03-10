import { StaticPostsType } from "@/types/PostType";
import { Box, Link } from "@mui/material";
import CardCarousell from "../card/CardCarousell";

interface CarouselSectionProps {
  label: string;
  link: string;
  cardList: StaticPostsType[];
}

export function CarouselSection({
  label,
  link,
  cardList,
}: CarouselSectionProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        width: "345px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box fontSize={20} fontWeight={700}>
          {label}
        </Box>
        <Link href={`/${link}`}>더보기</Link>
      </Box>
      <Box>
        <CardCarousell smallCardList={cardList} />
      </Box>
    </Box>
  );
}