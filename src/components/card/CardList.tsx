import { PostFrontMatterType } from "@/types/PostType";
import PostingCard from "./Card";
import { Stack } from "@mui/material";
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
          slug,
        }: {
          frontmatter: PostFrontMatterType;
          slug: string;
        }) => (
          <PostingCard
            title={title}
            date={date}
            coverImg={coverImg}
            mainCategory={mainCategory}
            subCategory={subCategory}
            description={description}
            key={title}
            slug={slug}
          />
        )
      )}
    </Stack>
  );
}
