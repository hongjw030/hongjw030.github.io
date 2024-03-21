/** 프로젝트 리뷰 리스트 전체 조회
 *
 */

import { useQuery } from "@tanstack/react-query";

import { ProjectCardList } from "@/components/card/CardList";
import HeadMeta from "@/components/seo/HeadMeta";
import MainLayout from "@/layouts/MainLayout";
import { getProjectList } from "@/apis/project";

export default function ProjectPage() {
  const { data } = useQuery({
    queryKey: ["all-project-list"],
    queryFn: () => getProjectList({}),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return (
    <MainLayout current="PROJECT">
      <HeadMeta
        title="프론트엔드 프로젝트"
        description="프론트엔드 프로젝트 리뷰 모음"
        image="/profile.jpg"
        url="project"
      />
      <ProjectCardList sortedProjects={data.totalProject} />
    </MainLayout>
  );
}
