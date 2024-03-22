/** 프로젝트 리뷰 리스트 전체 조회 페이지 */

import { Pagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getProjectList } from "@/apis/project";
import { ProjectCardList } from "@/components/card/CardList";
import HeadMeta from "@/components/seo/HeadMeta";
import { COUNT_PER_PAGE } from "@/constants";
import MainLayout from "@/layouts/MainLayout";

export default function ProjectPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["project-list", currentPage],
    queryFn: () =>
      getProjectList({
        count: COUNT_PER_PAGE,
        currentPage: currentPage > 1 ? currentPage : undefined,
      }),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <MainLayout current="PROJECT">
      <HeadMeta
        title="프론트엔드 프로젝트"
        description="프론트엔드 프로젝트 리뷰 모음"
        url="project"
      />
      {data && (
        <>
          <ProjectCardList sortedProjects={data.totalProject} />
          <Pagination
            count={Math.ceil(data.totalNumber / COUNT_PER_PAGE)}
            page={currentPage}
            onChange={handleChange}
          />
        </>
      )}
    </MainLayout>
  );
}
