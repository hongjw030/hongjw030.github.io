import Carousel from "react-material-ui-carousel";
import SmallCard from "./SmallCard";
import { MIN_WIDTH } from "@/constants";
import { PostListApiType } from "@/types/PostApiType";

interface SmallCardListProps {
  smallCardList: PostListApiType;
}

export default function CardCarousell({ smallCardList }: SmallCardListProps) {
  return (
    <Carousel
      cycleNavigation={true}
      animation="slide"
      interval={4000}
      navButtonsWrapperProps={{
        style: {
          bottom: "0",
          top: "unset",
        },
      }}
      navButtonsAlwaysVisible={true}
      autoPlay={true}
      sx={{
        width: MIN_WIDTH,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {smallCardList.map((card) => (
        <SmallCard
          key={`${card.title}`}
          title={card.title}
          mainCategory={card.mainCategory}
          subCategory={card.subCategory}
          coverImg={card.coverImg}
          createdAt={card.createdAt}
          updatedAt={card.updatedAt}
          content={card.content}
          description={card.description}
          _id={card._id}
        />
      ))}
    </Carousel>
  );
}
