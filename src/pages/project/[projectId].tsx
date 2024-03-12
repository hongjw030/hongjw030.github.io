import MainLayout from "@/layouts/MainLayout";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { MIN_WIDTH, POST_MAX_WIDTH, PROJECT_DIR } from "@/constants";
import { ProjectType } from "@/types/ProjectType";
import { Box, Paper } from "@mui/material";
import ProjectHeader from "@/components/header/ProjectHeader";
import markdownToHtml from "@/utils/markdownToHtml";
import HeadMeta from "@/components/seo/HeadMeta";

export default function ProjectPage({ id, frontmatter, markedContent }: any) {
  return (
    <MainLayout current="PROJECT">
      <HeadMeta
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.coverImg}
        url={id}
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
        <ProjectHeader
          note={frontmatter.note}
          title={frontmatter.title}
          date={frontmatter.date}
          description={frontmatter.description}
          coverImg={frontmatter.coverImg}
          developmentUrl={frontmatter.developmentUrl}
          githubUrl={frontmatter.githubUrl}
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
          dangerouslySetInnerHTML={{ __html: markedContent }}
        ></Paper>
      </Box>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const paths: { params: { projectId: string } }[] = [];
  const files = fs.readdirSync(PROJECT_DIR);

  const projects = files.map((filename) => {
    return {
      slug: filename.replace(".md", ""),
    };
  });

  projects.forEach((el) => {
    paths.push({
      params: { projectId: el.slug },
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { projectId: string };
}) {
  const projectId = params.projectId;
  const projectWithMetadata = fs
    .readFileSync(`src/_projects/${projectId}.md`)
    .toString();
  const { data, content } = matter(projectWithMetadata);
  const frontmatter = {
    ...data,
  } as ProjectType;
  const markedContent = await markdownToHtml(content);

  return {
    props: {
      id: params.projectId,
      frontmatter,
      markedContent,
    },
  };
}
