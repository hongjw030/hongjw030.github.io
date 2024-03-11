import { Box, Button, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import Face4Icon from "@mui/icons-material/Face4";

export function HeaderTitle() {
  return (
    <Box
      fontSize={20}
      fontWeight={600}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      프론트엔드 개발자,
      <Box
        sx={{
          display: "flex",
          fontSize: "30px",
          fontWeight: "900",
        }}
      >
        😎
        <Box
          sx={{
            color: "transparent",
            background:
              "linear-gradient(180deg, rgba(209,74,92,1) 0%, rgba(175,68,126,1) 16%, rgba(140,62,162,1) 49%, rgba(85,52,218,1) 100%)",
            backgroundClip: "text",
          }}
        >
          홍장군의 개발 일지
        </Box>
        🤺
      </Box>
    </Box>
  );
}

export function HeaderInfo() {
  return (
    <Box
      fontSize={14}
      sx={{
        textAlign: "center",
      }}
    >
      거침없이 앞으로 나아가는 장군감 개발자 홍장군입니다!
      <br />
      아주 조금이라도 어제보다 나은 오늘이 되기 위해,
      <br />
      한 보 후퇴했다면 내일은 두 보 전진하기 위해,
      <br />
      배우는 것을 두려워하지 않는 개발자가 되고자 합니다!
    </Box>
  );
}

export function HeaderSkillBadgeList() {
  return (
    <Box
      fontSize={14}
      sx={{
        textAlign: "center",
      }}
    >
      <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
      <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
      <img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=next.js&logoColor=white" />
      <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
      <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" />
      <img src="https://img.shields.io/badge/sass-cc6699?style=for-the-badge&logo=sass&logoColor=white" />
      <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" />
      <img src="https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
      <img src="https://img.shields.io/badge/Mui-007FFF?style=for-the-badge&logo=MUI&logoColor=white" />
      <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
      <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" />
      <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
    </Box>
  );
}

export function HeaderContact() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
      }}
    >
      <Tooltip title="https://www.github.com/hongjw030">
        <Button
          variant="outlined"
          href="https://www.github.com/hongjw030"
          sx={{ display: "flex", gap: "5px" }}
          target="_blank"
        >
          <GitHubIcon />
          깃허브 보러가기
        </Button>
      </Tooltip>
      <Tooltip title="hongjw030@naver.com">
        <Button
          variant="outlined"
          href="mailto:hongjw030@naver.com"
          sx={{ display: "flex", gap: "5px" }}
        >
          <EmailIcon />
          메일 쓰기
        </Button>
      </Tooltip>
      <Tooltip title="Next.js로 만든 포트폴리오">
        <Button
          variant="outlined"
          href="#"
          sx={{ display: "flex", gap: "5px" }}
        >
          <ArticleIcon />
          포트폴리오 보러가기
        </Button>
      </Tooltip>
      <Tooltip title="pdf 형식으로 다운받습니다.">
        <Button
          variant="outlined"
          href="notification.pdf"
          download
          sx={{ display: "flex", gap: "5px" }}
        >
          <Face4Icon />
          이력서 다운받기
        </Button>
      </Tooltip>
    </Box>
  );
}

export function HeaderPrivacy() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box fontWeight={700}>이름</Box>
        <Box>홍재원</Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box fontWeight={700}>학력</Box>
        <Box>이화여대(컴퓨터공학과)</Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box fontWeight={700}>이메일</Box>
        <Box>hongjw030@naver.com</Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box fontWeight={700}>깃허브</Box>
        <Box>https://www.github.com/hongjw030</Box>
      </Box>
    </Box>
  );
}
