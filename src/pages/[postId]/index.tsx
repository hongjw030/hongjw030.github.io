import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { getPostContent } from "@/apis/post";
import PostHeader from "@/components/header/PostHeader";
import HeadMeta from "@/components/seo/HeadMeta";
import Utterances from "@/components/comment/Utterances";
import MarkdownContainer from "@/components/container/MarkdownContainer";
import SubLayout from "@/layouts/SubLayout";

export default function BlogPage() {
  const router = useRouter();
  const { postId } = router.query;

  const { data, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostContent(postId as string),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!postId,
  });

  return (
    <>
      {data && !isLoading && (
        <SubLayout
          headerComponent={
            <PostHeader
              title={data.title}
              createdAt={data.createdAt}
              updatedAt={data.updatedAt}
              description={data.description}
            />
          }
        >
          <MarkdownContainer content={data?.content} _id={data?._id} />
          <Utterances />
        </SubLayout>
      )}
    </>
  );
}
