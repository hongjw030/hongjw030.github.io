import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { getMainPostList } from "@/apis/post";
import { PostingCardList } from "@/components/card/CardList";
import BlogHeader from "@/components/header/BlogHeader";
import SubLayout from "@/layouts/SubLayout";

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
