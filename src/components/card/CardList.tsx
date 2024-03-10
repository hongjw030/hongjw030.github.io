import { StaticPostsType } from "@/types/PostType";
import PostingCard from "./Card";
import { Stack } from "@mui/material";
import EmptyBlogPage from "../emptyContainer/EmptyBlogPage";

interface CardListProps {
  sortedPosts: StaticPostsType[];
}

export default function CardList({ sortedPosts }: CardListProps) {
  const postCount = sortedPosts.length;
  if (!sortedPosts || postCount <= 0) {
    return <EmptyBlogPage />;
  }
  let cardListPosts = sortedPosts.filter((el) => el !== null);

  return (
    <Stack spacing={2}>
      {cardListPosts.map(
        ({
          slug,
          frontmatter,
          birthTime,
        }: {
          slug: string;
          frontmatter: any;
          birthTime: string;
        }) => (
          <PostingCard
            title={frontmatter.title}
            birthTime={birthTime}
            coverImg={frontmatter.coverImg}
            mainCategory={frontmatter.mainCategory}
            subCategory={frontmatter.subCategory}
            description={frontmatter.description}
            key={frontmatter.title}
            slug={slug}
          />
        )
      )}
    </Stack>
  );
}
