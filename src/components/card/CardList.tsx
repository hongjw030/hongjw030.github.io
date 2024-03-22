import { Stack } from "@mui/material";

import { PostingCard, ProjectCard } from "@/components/card/Card";
import { EMPTY_POST_LIST } from "@/constants/texts";
import { PostListApiType } from "@/types/PostApiType";
import { ProjectApiListType } from "@/types/ProjectApiType";

interface CardListProps {
  sortedPosts: PostListApiType;
}
interface ProjectCardListProps {
  sortedProjects: ProjectApiListType;
}

export function PostingCardList({ sortedPosts }: CardListProps) {
  if (!sortedPosts || sortedPosts?.length <= 0) {
    return <>{EMPTY_POST_LIST}</>;
  }

  return (
    <Stack
      spacing={2}
      sx={{
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      {sortedPosts &&
        sortedPosts.map((post) => <PostingCard key={post._id} {...post} />)}
    </Stack>
  );
}

export function ProjectCardList({ sortedProjects }: ProjectCardListProps) {
  if (!sortedProjects || sortedProjects?.length <= 0) {
    return <>{EMPTY_POST_LIST}</>;
  }

  return (
    <Stack spacing={2}>
      {sortedProjects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </Stack>
  );
}
