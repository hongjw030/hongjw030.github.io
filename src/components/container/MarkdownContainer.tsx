import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/a11y-dark.css";

import { POST_MAX_WIDTH } from "@/constants";
import {
  CHARCOAL,
  GRAY_1_COLOR,
  CODE_BLOCK_RED,
  HIGHLIGHT_RED,
  HIGHLIGHT_YELLOW,
  HIGHLIGHT_BLUE,
} from "@/constants/colors";

interface MarkdownContainerProps {
  content: string;
  _id: string;
}

export default function MarkdownContainer({
  content,
  _id,
}: MarkdownContainerProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: POST_MAX_WIDTH,
        "& img": {
          minWidth: "340px",
          width: "60vw",
          maxWidth: POST_MAX_WIDTH,
        },
        "& p, & pre": {
          fontSize: "15px",
          paddingLeft: "10px",
          whiteSpace: "pre-wrap",
        },
        "& ul, ol": {
          margin: 0,
          padding: 0,
          paddingLeft: "30px",
          paddingBottom: "15px",
        },
        "& li": {
          fontSize: "14px",
        },
        "& h1": {
          boxShadow: `inset 0 -15px 0 ${HIGHLIGHT_RED}`,
        },
        "& h2, h3": {
          boxShadow: `inset 0 -15px 0 ${HIGHLIGHT_YELLOW}`,
        },
        "& h1, h2, h3": {
          marginTop: "40px",
          marginBottom: "15px",
          width: "fit-content",
        },
        "& h4, h5, h6": {
          boxShadow: `inset 0 -15px 0 ${HIGHLIGHT_BLUE}`,
          marginTop: "25px",
          marginBottom: "8px",
          width: "fit-content",
        },
        "& pre": {
          backgroundColor: CHARCOAL,
          padding: "15px",
          borderRadius: "10px",
          marginTop: "15px",
          marginBottom: "15px",

          "& code": {
            backgroundColor: CHARCOAL,
            color: GRAY_1_COLOR,
            fontWeight: "400",
          },
        },
        "& code": {
          backgroundColor: GRAY_1_COLOR,
          fontFamily: "courier, monospace",
          color: CODE_BLOCK_RED,
          fontWeight: "700",
        },
        "& hr": {
          marginTop: "30px",
          marginBottom: "30px",
          backgroundColor: GRAY_1_COLOR,
          height: "1px",
          border: 0,
        },
      }}
    >
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>
    </Box>
  );
}
