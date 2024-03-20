import { useQuery } from "@tanstack/react-query";

import { getAllPostList } from "@/apis/post";
import { PostingCardList } from "@/components/card/CardList";
import HeadMeta from "@/components/seo/HeadMeta";
import BlogHeader from "@/components/header/BlogHeader";
import SubLayout from "@/layouts/SubLayout";

export default function BlogPage() {
  const { data } = useQuery({
    queryKey: ["all-post-list"],
    queryFn: () => getAllPostList(),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
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
            image="/profile.jpg"
            url="blog"
          />
          <PostingCardList sortedPosts={data} />
        </SubLayout>
      )}
    </>
  );
}
