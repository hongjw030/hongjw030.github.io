import { useQuery } from "@tanstack/react-query";

import { PostingCardList } from "@/components/card/CardList";
import HeadMeta from "@/components/seo/HeadMeta";
import BlogHeader from "@/components/header/BlogHeader";
import SubLayout from "@/layouts/SubLayout";
import { useRouter } from "next/router";
import { getPostList } from "@/apis/post";

export default function BlogPage() {
  const router = useRouter();
  const { mainPath, subPath } = router.query;

  const { data } = useQuery({
    queryKey: ["all-post-list"],
    queryFn: () =>
      getPostList({ mainPath: mainPath as string, subPath: subPath as string }),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!mainPath,
  });

  return (
    <>
      {data && (
        <SubLayout
          headerComponent={
            <BlogHeader
              description={data.description}
              coverImg={data.coverImg}
            />
          }
        >
          <HeadMeta
            title="프론트엔드 블로그 포스팅"
            description="프론트엔드 블로그 포스팅 모음"
            url="blog"
          />
          <PostingCardList sortedPosts={data.totalPost} />
        </SubLayout>
      )}
    </>
  );
}
