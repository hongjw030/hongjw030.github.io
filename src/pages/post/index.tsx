import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

import { getPostList } from "@/apis/post";
import { PostingCardList } from "@/components/card/CardList";
import HeadMeta from "@/components/seo/HeadMeta";
import { COUNT_PER_PAGE } from "@/constants";
import CategoryLayout from "@/layouts/CategoryLayout";

export default function BlogPage() {
  const router = useRouter();
  const { mainPath, subPath } = router.query;
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["post-index", mainPath, subPath, currentPage],
    queryFn: () =>
      getPostList({
        mainPath: mainPath as string | undefined,
        subPath: subPath as string | undefined,
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
    <CategoryLayout>
      <HeadMeta
        title="프론트엔드 블로그 포스팅"
        description="프론트엔드 블로그 포스팅 모음"
        url="blog"
      />
      {data && (
        <>
          <PostingCardList sortedPosts={data.totalPost} />
          <Pagination
            count={Math.ceil(data.totalNumber / COUNT_PER_PAGE)}
            page={currentPage}
            onChange={handleChange}
          />
        </>
      )}
    </CategoryLayout>
  );
}
