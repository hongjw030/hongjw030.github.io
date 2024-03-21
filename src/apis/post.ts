import markdownToHtml from "@/utils/markdownToHtml";
import axiosInstance from "@/apis/libs/instance"

interface getPostListProps {
  mainPath ?: string;
  subPath?: string;
  cursor?: string;
  count?: number;
}

// 모든 포스트 조회
export async function getPostList ({mainPath, subPath, cursor, count=10}: getPostListProps) {
  let queries = `?count=${count}${mainPath ? `&mainPath=${mainPath}` : ""}${subPath ? `&subPath=${subPath}` : ""}${cursor ? `&cursor=${cursor}` : ""}`
  const data = await axiosInstance.get(`/post${queries}`)
  return data?.data;
}

// 단일 포스트 조회
export async function getPostContent (postId: string) {
  try{
    const data = await axiosInstance.get(`/post/${postId}`)
    return data?.data;
  }catch(e){
    return e;
  }
}

// 포스트 내용을 md에서 html로 바꿔주는 비동기함수
export async function getMarkdownToHtml(content: string){
  const data = await markdownToHtml(content);
  return data;
}
