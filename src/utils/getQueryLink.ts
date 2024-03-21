import { COUNT_PER_PAGE } from "@/constants";
import { POST_LINK, PROJECT_LINK } from "@/constants/links";

// 포스트 글 전체보기 페이지로 가는 링크를 리턴하는 함수
export const getAllPostQueryLink= () => {
  return `${POST_LINK}?count=${COUNT_PER_PAGE}`
};

// 포스트 글 카테고리별 페이지로 가는 링크를 리턴하는 함수
export const getCategoryPostQueryLink = (mainPath: string, subPath?: string) => {
  let queries = `?count=${COUNT_PER_PAGE}&mainPath=${mainPath}${subPath ? `&subPath=${subPath}` : ""}`
  return `${POST_LINK}${queries}`
}

// 프로젝트 글 전체 보기 페이지로 가는 링크를 리턴하는 함수
export const getAllProjectQueryLink = () => {
  return `${PROJECT_LINK}?count=${COUNT_PER_PAGE}`
}

