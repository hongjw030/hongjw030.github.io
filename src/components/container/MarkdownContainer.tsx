import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { getMarkdownToHtml } from "@/apis/post";
import { POST_MAX_WIDTH } from "@/constants";

interface MarkdownContainerProps {
  content: string;
  _id: string;
}

export default function MarkdownContainer({
  content,
  _id,
}: MarkdownContainerProps) {
  const { data } = useQuery({
    queryKey: ["post-content", _id],
    queryFn: () => getMarkdownToHtml(content),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!content,
  });

  if (data) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: POST_MAX_WIDTH,
          "& img": {
            minWidth: "340px",
            width: "85vw",
            maxWidth: POST_MAX_WIDTH,
          },
          "& p, & ul, & ol, & li, & pre": {
            fontSize: "15px",
            paddingLeft: "10px",
            whiteSpace: "pre-wrap",
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
        dangerouslySetInnerHTML={{ __html: data }}
      ></Box>
    );
  } else {
    return <></>;
  }
}
