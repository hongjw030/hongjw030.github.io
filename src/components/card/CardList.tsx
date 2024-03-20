import { Stack } from "@mui/material";

import { PostingCard, ProjectCard } from "@/components/card/Card";
import { EMPTY_POST_LIST } from "@/constants/alertText";
import { PostListApiType } from "@/types/PostApiType";

interface CardListProps {
  sortedPosts: PostListApiType;
}

export function PostingCardList({ sortedPosts }: CardListProps) {
  const postCount = sortedPosts.length;
  if (!sortedPosts || postCount <= 0) {
    return <>{EMPTY_POST_LIST}</>;
  }

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
    return <>{EMPTY_POST_LIST}</>;
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
