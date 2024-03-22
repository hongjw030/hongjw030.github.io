import Carousel from "react-material-ui-carousel";

import SmallCard from "@/components/card/SmallCard";
import { MIN_WIDTH } from "@/constants";
import { CardType, SmallCardType } from "@/types/CardType";

interface SmallCardListProps {
  cardType: CardType;
  smallCardList: SmallCardType[];
}

export default function CardCarousel({
  smallCardList,
  cardType,
}: SmallCardListProps) {
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
          cardType={cardType}
          title={card.title}
          coverImg={card.coverImg}
          createdAt={card.createdAt}
          description={card.description}
          _id={card._id}
        />
      ))}
    </Carousel>
  );
}
