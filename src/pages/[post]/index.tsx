import fs from "fs";
import matter from "gray-matter";
import { MIN_WIDTH, POST_DIR, POST_MAX_WIDTH } from "@/constants";
import { PostFrontMatterType } from "@/types/PostType";
import CATEGORY_ARRAY from "@/constants/category";
import PostLayout from "@/layouts/PostLayout";
import PostHeader from "@/components/header/PostHeader";
import { Box, Paper, Stack } from "@mui/material";
import markdownToHtml from "@/utils/markdownToHtml";
import HeadMeta from "@/components/seo/HeadMeta";

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
      <HeadMeta
        title={frontmatter.title}
        description={frontmatter.description ?? frontmatter.title}
        image="/profile.jpg"
        url={post.id}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: POST_MAX_WIDTH,
          minWidth: MIN_WIDTH,
          gap: "20px",
        }}
      >
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
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
            maxWidth: POST_MAX_WIDTH,
            "& img": {
              minWidth: "340px",
              width: "85vw",
              maxWidth: POST_MAX_WIDTH,
            },
            "& p, & ul, & ol, & li, & pre": {
              fontSize: "15px",
              paddingLeft: "10px",
            },
            "& li": {
              paddingLeft: "10px",
            },
            "& h1, h2, h3": {
              marginTop: "40px",
              marginBottom: "15px",
            },
            "& pre": {
              backgroundColor: "#dfdfdf",
              padding: "10px",
              fontSize: "13px",
              "& code": {
                color: "#0f0f0f !important",
              },
            },
            "& code": {
              backgroundColor: "#dfdfdf",
              fontFamily: "courier, monospace",
              color: "#d94844",
            },
            "& hr": {
              marginTop: "30px",
              marginBottom: "30px",
              backgroundColor: "#dfdfdf",
              height: "1px",
              border: 0,
            },
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></Paper>
      </Box>
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
    id: params.post,
    frontmatter: data,
    content: markedContent,
    birthTime: stats.birthtime.toString(),
    mTime: stats.mtime.toString(),
  };
  return {
    props: { post },
  };
}
