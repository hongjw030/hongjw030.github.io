import { useQuery } from "@tanstack/react-query";

import MainLayout from "@/layouts/MainLayout";
import React from "react";
import ProjectHeader from "@/components/header/ProjectHeader";
import { useRouter } from "next/router";
import { getProjectContent } from "@/apis/project";
import MarkdownContainer from "@/components/container/MarkdownContainer";

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;

  const { data, isLoading } = useQuery({
    queryKey: ["post", projectId],
    queryFn: () => getProjectContent(projectId as string),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!projectId,
  });

  return (
    <MainLayout current="PROJECT">
      {data && !isLoading && (
        <>
          <ProjectHeader
            note={data.note}
            title={data.title}
            date={data.createdAt}
            description={data.description}
            coverImg={data.coverImg}
            developmentUrl={data.developmentUrl}
            githubUrl={data.githubUrl}
          />
          <MarkdownContainer content={data?.content} _id={data?._id} />
        </>
      )}
    </MainLayout>
  );
}
