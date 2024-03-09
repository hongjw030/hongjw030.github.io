import { PostFrontMatterType } from "@/types/PostType";
import PostingCard from "./Card";
import { Box, Pagination, Stack } from "@mui/material";
import { POST_PER_PAGE } from "@/constants";
import EmptyBlogPage from "../emptyContainer/EmptyBlogPage";

export default function CardList({ sortedPosts }: any) {
  const postCount = sortedPosts.length;

  if (!sortedPosts || postCount <= 0) {
    return <EmptyBlogPage />;
  }

  return (
    <Stack spacing={2}>
      {sortedPosts.map(
        ({
          frontmatter: {
            title,
            description,
            coverImg,
            date,
            mainCategory,
            subCategory,
          },
        }: {
          frontmatter: PostFrontMatterType;
        }) => (
          <PostingCard
            title={title}
            date={date}
            coverImg={coverImg}
            mainCategory={mainCategory}
            subCategory={subCategory}
            description={description}
            key={title}
          />
        )
      )}
    </Stack>
  );
}
