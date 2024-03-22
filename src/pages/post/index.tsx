import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getPostList } from "@/apis/post";
import { PostingCardList } from "@/components/card/CardList";
import HeadMeta from "@/components/seo/HeadMeta";
import { COUNT_PER_PAGE } from "@/constants";
import CategoryLayout from "@/layouts/CategoryLayout";

export default function BlogPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mainPath, subPath } = router.query;
  const [currentPage, setCurrentPage] = useState(1);
  const [cursor, setCursor] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["post-list", mainPath, subPath, currentPage],
    queryFn: () =>
      getPostList({
        mainPath: mainPath as string | undefined,
        subPath: subPath as string | undefined,
        count: COUNT_PER_PAGE,
        cursor: cursor ? cursor : undefined,
      }),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  // TODO - 프리패치 사용하기
  // TODO - cursor을 page로 바꾸고 그냥 skip(countPerPage * page) 사용해야겠음 커서로 하니까 1에서 4, 5, 등 다른 페이지로 건너뛰는게 불가능함;;
  // useEffect(() => {
  //   if (data) {
  //     setCursor(data.totalPost[data.totalPost.length - 1]?._id);
  //   }
  // queryClient.prefetchQuery({
  //   queryKey: ["post-list", mainPath, subPath, currentPage + 1],
  //   queryFn: () =>
  //     getPostList({
  //       mainPath: mainPath as string,
  //       subPath: subPath as string | undefined,
  //       count: COUNT_PER_PAGE,
  //       cursor: cursor ? cursor : undefined,
  //     }),
  // });
  // }, [data]);

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
          <div>총 글 개수는 {data.totalNumber}</div>
          <div>
            총 페이지 수는 {Math.ceil(data.totalNumber / COUNT_PER_PAGE)}
          </div>
          <div>현재 페이지는 {currentPage}</div>
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            이전
          </button>
          <button
            type="button"
            disabled={
              currentPage >= Math.ceil(data.totalNumber / COUNT_PER_PAGE)
            }
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            다음
          </button>
        </>
      )}
    </CategoryLayout>
  );
}
