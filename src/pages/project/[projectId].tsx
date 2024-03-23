/** 단일 프로젝트 리뷰글 조회 */

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { getProjectContent } from "@/apis/project";
import ProjectHeader from "@/components/header/ProjectHeader";
import MarkdownContainer from "@/components/container/MarkdownContainer";
import ContentLayout from "@/layouts/ContentLayout";

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;

  const { data, isLoading } = useQuery({
    queryKey: ["project-projectId", projectId],
    queryFn: () => getProjectContent(projectId as string),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!projectId,
  });

  return (
    <ContentLayout current="PROJECT">
      {data && !isLoading && (
        <>
          <ProjectHeader {...data} />
          <MarkdownContainer content={data?.content} _id={data?._id} />
        </>
      )}
    </ContentLayout>
  );
}
