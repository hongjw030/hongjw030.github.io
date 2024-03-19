import BlogLayout from "@/layouts/BlogLayout";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMainPostList } from "@/apis/post";
import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();
  const { mainId } = router.query;
  const { data } = useQuery({
    queryKey: ["main-post-list"],
    queryFn: () => getMainPostList(mainId as string),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return (
    <BlogLayout>
      {/* <PostingCardList sortedPosts={sortedPosts} /> */}
    </BlogLayout>
  );
}
