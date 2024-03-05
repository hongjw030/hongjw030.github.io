import { styled } from "@mui/material/styles";

interface StyledSpacingProps {
  justifyContent?: string;
  height?: number;
}

const StyledSpacing = styled("div", {
  shouldForwardProp: (prop) => prop !== "justifyContent" && prop !== "height",
})<StyledSpacingProps>(({ justifyContent = "flex-start", height = 0 }) => ({
  display: "flex",
  alignItems: "center",
  padding: 0,
  height: `${height}px`,
  justifyContent: justifyContent,
}));

export default StyledSpacing;
