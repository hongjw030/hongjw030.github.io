import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { getMainPostList } from "@/apis/post";
import { PostingCardList } from "@/components/card/CardList";
import BlogLayout from "@/layouts/BlogLayout";

export default function BlogPage() {
  const router = useRouter();
  const { mainId } = router.query;

  const { data } = useQuery({
    queryKey: ["main-post-list"],
    queryFn: () => getMainPostList(mainId as string),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!mainId,
  });

  return (
    <BlogLayout>{data && <PostingCardList sortedPosts={data} />}</BlogLayout>
  );
}
