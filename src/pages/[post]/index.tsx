import fs from "fs";
import matter from "gray-matter";
import { POST_DIR } from "@/constants";
import { PostFrontMatterType } from "@/types/PostType";
import CATEGORY_ARRAY from "@/constants/category";
import PostLayout from "@/layouts/PostLayout";
import PostHeader from "@/components/header/PostHeader";
import { Box, Stack } from "@mui/material";
import markdownToHtml from "@/utils/markdownToHtml";

export default function BlogPage({ post }: any) {
  if (!post) return;
  const frontmatter: PostFrontMatterType = post?.frontmatter;
  const currentMainObject = frontmatter.mainCategory
    ? CATEGORY_ARRAY[
        CATEGORY_ARRAY.findIndex(
          (el) => el.mainCategory.id === frontmatter.mainCategory
        )
      ]
    : null;

  const currentSubObject =
    currentMainObject && frontmatter.subCategory
      ? currentMainObject.subCategory[
          currentMainObject.subCategory.findIndex(
            (el) => el.id === frontmatter.subCategory
          )
        ]
      : null;

  return (
    <PostLayout
      mainId={currentMainObject?.mainCategory.id}
      subId={currentSubObject?.id}
      mainTitle={currentMainObject?.mainCategory.title}
      subTitle={currentSubObject?.title}
    >
      <Stack spacing={4}>
        <PostHeader
          title={frontmatter.title}
          mainId={frontmatter.mainCategory}
          mainTitle={currentMainObject?.mainCategory.title}
          subId={frontmatter.subCategory}
          subTitle={currentSubObject?.title}
          birthTime={post.birthTime}
          mTime={post.mTime}
          description={frontmatter.description}
        />
        <Box
          sx={{
            "& img": {
              minWidth: "340px",
              width: "50vw",
            },
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></Box>
      </Stack>
    </PostLayout>
  );
}

export async function getStaticPaths() {
  const paths: Array<any> = [];
  const files = fs.readdirSync(POST_DIR);
  files.forEach((el) => {
    paths.push({
      params: { post: el.replace(".md", "") },
    });
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { post: string } }) {
  const mdFile = fs.readFileSync(`src/_posts/${params.post}.md`).toString();
  let stats = fs.statSync(`src/_posts/${params.post}.md`);

  const { data, content } = matter(mdFile);
  const markedContent = await markdownToHtml(content);
  const post = {
    frontmatter: data,
    content: markedContent,
    birthTime: stats.birthtime.toString(),
    mTime: stats.mtime.toString(),
  };
  return {
    props: { post },
  };
}
