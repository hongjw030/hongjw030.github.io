import { Box, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import Face4Icon from "@mui/icons-material/Face4";

import ContentContainer from "@/components/container/ContentContainer";
import { InfoDescription } from "@/components/common/Descriptions";
import { TooltipLinkButton } from "@/components/common/Links";
import { NICKNAME_KOR, EMAIL, GITHUB_URL, MAJOR, UNIV } from "@/constants/user";

const USER_INFO_LIST = [
  { label: "닉네임", value: NICKNAME_KOR },
  { label: "이메일", value: EMAIL },
  { label: "깃허브", value: GITHUB_URL },
  { label: "학력", value: `${MAJOR} ${UNIV}` },
];

const CONTACT_LIST = [
  {
    tooltip: GITHUB_URL,
    href: GITHUB_URL,
    text: "깃허브 보러가기",
    icon: <GitHubIcon />,
  },
  {
    tooltip: EMAIL,
    href: `mailto:${EMAIL}`,
    text: "메일 쓰기",
    icon: <EmailIcon />,
  },
  {
    tooltip: "Next.js로 만든 포트폴리오",
    href: "#",
    text: "포트폴리오 보러가기",
    icon: <ArticleIcon />,
  },
  {
    tooltip: "pdf 형식으로 다운받습니다.",
    href: "notification2.pdf",
    text: "이력서 다운받기",
    icon: <Face4Icon />,
  },
];

function HeaderPrivacy() {
  return (
    <Box>
      {USER_INFO_LIST.map((el) => {
        return (
          <InfoDescription label={el.label} value={el.value} key={el.label} />
        );
      })}
    </Box>
  );
}

function HeaderContact() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 2, lg: 4 }}>
        {CONTACT_LIST.map((el) => (
          <Grid item xs={1} sm={1} md={1} key={el.href}>
            <TooltipLinkButton
              tooltip={el.tooltip}
              href={el.href}
              icon={el.icon}
              text={el.text}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function AboutMe() {
  return (
    <ContentContainer>
      <HeaderPrivacy />
      <HeaderContact />
    </ContentContainer>
  );
}
