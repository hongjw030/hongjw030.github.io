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
    <Stack spacing={2}>
      {sortedPosts &&
        sortedPosts.map((post) => (
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

export function ProjectCardList({ sortedProjects }: ProjectCardListProps) {
  if (!sortedProjects || sortedProjects?.length <= 0) {
    return <>{EMPTY_POST_LIST}</>;
  }

  return (
    <Stack spacing={2}>
      {sortedProjects.map((project) => (
        <ProjectCard
          key={project._id}
          _id={project._id}
          updatedAt={project.updatedAt}
          createdAt={project.createdAt}
          isTeam={project.isTeam}
          functions={project.functions}
          githubUrl={project.githubUrl}
          developmentUrl={project.developmentUrl}
          note={project.note}
          title={project.title}
          term={project.term}
          content={project.content}
          coverImg={project.coverImg}
          description={project.description}
        />
      ))}
    </Stack>
  );
}
