import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import { getSubPostList } from "@/apis/post";
import { PostingCardList } from "@/components/card/CardList";
import BlogHeader from "@/components/header/BlogHeader";
import SubLayout from "@/layouts/SubLayout";

export default function BlogPage() {
  const router = useRouter();
  const { mainId, subId } = router.query;
  const { data } = useQuery({
    queryKey: ["sub-post-list"],
    queryFn: () => getSubPostList(mainId as string, subId as string),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!subId,
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
          <PostingCardList sortedPosts={data} />
        </SubLayout>
      )}
    </>
  );
}
