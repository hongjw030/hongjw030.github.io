import { StaticPostsType } from "@/types/PostType";
import { PostingCard, ProjectCard } from "./Card";
import { Stack } from "@mui/material";
import EmptyBlogPage from "../emptyContainer/EmptyBlogPage";

interface CardListProps {
  sortedPosts: StaticPostsType[];
}

export function PostingCardList({ sortedPosts }: CardListProps) {
  const postCount = sortedPosts.length;
  if (!sortedPosts || postCount <= 0) {
    return <EmptyBlogPage />;
  }

  return (
    <Stack spacing={2}>
      {sortedPosts.map(
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

export function ProjectCardList({ sortedPosts }: CardListProps) {
  const postCount = sortedPosts.length;
  if (!sortedPosts || postCount <= 0) {
    return <EmptyBlogPage />;
  }

  return (
    <Stack spacing={2}>
      {sortedPosts.map(
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
      )}
    </Stack>
  );
}
