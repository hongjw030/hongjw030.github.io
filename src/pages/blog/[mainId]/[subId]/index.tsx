import BlogLayout from "@/layouts/BlogLayout";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getSubPostList } from "@/apis/post";

export default function BlogPage() {
  const router = useRouter();
  const { mainId, subId } = router.query;
  const { data } = useQuery({
    queryKey: ["sub-post-list"],
    queryFn: () => getSubPostList(mainId as string, subId as string),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  console.log(data);

  return (
    <BlogLayout>
      {/* <HeadMeta
        title={currentSubObject?.title ?? "프론트엔드 블로그 카테고리"}
        description={
          currentSubObject?.description ?? "프론트엔드 블로그 카테고리"
        }
        image="/profile.jpg"
        url={`blog/${mainId}/${subId}`}
      />
      <PostingCardList sortedPosts={sortedPosts} /> */}
    </BlogLayout>
  );
}
