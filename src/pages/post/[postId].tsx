import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { getPostContent } from "@/apis/post";
import Utterances from "@/components/comment/Utterances";
import MarkdownContainer from "@/components/container/MarkdownContainer";
import PostCover from "@/components/cover/PostCover";
import StyledSpacing from "@/components/common/StyledSpacing";
import ContentContainer from "@/components/container/ContentContainer";
import ContentLayout from "@/layouts/ContentLayout";

export default function BlogPage() {
  const router = useRouter();
  const { postId } = router.query;

  const { data, isLoading } = useQuery({
    queryKey: ["post-postId", postId],
    queryFn: () => getPostContent(postId as string),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!postId,
  });

  return (
    <ContentLayout current="POST">
      {data && !isLoading && (
        <>
          <PostCover {...data} />
          <StyledSpacing height={30} />
          <ContentContainer>
            <MarkdownContainer content={data?.content} _id={data?._id} />
          </ContentContainer>
        </>
      )}

      <StyledSpacing height={30} />
      <Utterances />
    </ContentLayout>
  );
}
