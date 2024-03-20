import { PostingCard, ProjectCard } from "./Card";
import { Stack } from "@mui/material";
import EmptyBlogPage from "../emptyContainer/EmptyBlogPage";
import { PostListApiType } from "@/types/PostApiType";

interface CardListProps {
  sortedPosts: PostListApiType;
}

export function PostingCardList({ sortedPosts }: CardListProps) {
  const postCount = sortedPosts.length;
  if (!sortedPosts || postCount <= 0) {
    return <EmptyBlogPage />;
  }
  console.log(sortedPosts);

  return (
    <Stack spacing={2}>
      {sortedPosts.map((post) => (
        <PostingCard
          title={post.title}
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}
          coverImg={post.coverImg}
          mainCategory={post.mainCategory}
          subCategory={post.subCategory}
          description={post.description}
          _id={post._id}
          key={post._id}
          content={post.content}
        />
      ))}
    </Stack>
  );
}

export function ProjectCardList({ sortedPosts }: CardListProps) {
  const postCount = sortedPosts.length;
  if (!sortedPosts || postCount <= 0) {
    return <EmptyBlogPage />;
  }

  return (
    <Stack spacing={2}>
      {/* {sortedPosts.map(
        ({ slug, frontmatter }: { slug: string; frontmatter: any }) => (
          <ProjectCard
            note={frontmatter.note}
            title={frontmatter.title}
            date={frontmatter.date}
            coverImg={frontmatter.coverImg}
            description={frontmatter.description}
            key={frontmatter.note}
            slug={slug}
          />
        )
      )} */}
    </Stack>
  );
}
