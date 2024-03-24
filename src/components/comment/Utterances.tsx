import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";

import { MIN_WIDTH, POST_MAX_WIDTH } from "@/constants";

const Utterances: React.FC = () => {
  const commentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (commentRef.current) {
      const isComment = commentRef.current.firstChild;

      if (isComment) {
        return;
      } else {
        const scriptElem = document.createElement("script");

        const scriptConfig = {
          src: "https://utteranc.es/client.js",
          async: "true",
          repo: "hongjw030/hongjw030.github.io-comment",
          "issue-term": "url",
          theme: "github-light",
          label: "😎blog-comment",
          crossOrigin: "anonymous",
        };

        Object.entries(scriptConfig).forEach(([key, value]) => {
          scriptElem.setAttribute(key, value);
        });
        commentRef.current.appendChild(scriptElem);
      }
    }
  }, [commentRef]);

  return (
    <Box
      sx={{ width: "100%", maxWidth: POST_MAX_WIDTH, minWidth: MIN_WIDTH }}
      ref={commentRef}
    />
  );
};

export default Utterances;
