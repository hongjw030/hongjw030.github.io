import { styled } from "@mui/material/styles";

import { DRAWER_WIDTH, MIN_WIDTH } from "@/constants";

const Container = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  display: "flex",
  width: "100%",
  minWidth: MIN_WIDTH,
  flexDirection: "column",
  alignItems: "center",
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default Container;
