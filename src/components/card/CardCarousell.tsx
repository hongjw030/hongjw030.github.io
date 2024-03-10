import Carousel from "react-material-ui-carousel";
import SmallCard from "./SmallCard";
import { StaticPostsType } from "@/types/PostType";
import { MIN_WIDTH } from "@/constants";

interface SmallCardListProps {
  smallCardList: StaticPostsType[];
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
          key={`${card.frontmatter.title}`}
          title={card.frontmatter.title}
          mainCategory={card.frontmatter.mainCategory}
          subCategory={card.frontmatter.subCategory}
          coverImg={card.frontmatter.coverImg}
          birthTime={card.birthTime}
          description={card.frontmatter.description}
          slug={card.slug}
        />
      ))}
    </Carousel>
  );
}
