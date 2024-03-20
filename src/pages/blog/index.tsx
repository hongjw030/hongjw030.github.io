import { useQuery } from "@tanstack/react-query";

import { getAllPostList } from "@/apis/post";
import BlogLayout from "@/layouts/BlogLayout";
import { PostingCardList } from "@/components/card/CardList";
import HeadMeta from "@/components/seo/HeadMeta";

export default function BlogPage() {
  const { data } = useQuery({
    queryKey: ["all-post-list"],
    queryFn: () => getAllPostList(),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return (
    <BlogLayout>
      <HeadMeta
        title="프론트엔드 블로그 포스팅"
        description="프론트엔드 블로그 포스팅 모음"
        image="/profile.jpg"
        url="blog"
      />
      {data && <PostingCardList sortedPosts={data} />}
    </BlogLayout>
  );
}
