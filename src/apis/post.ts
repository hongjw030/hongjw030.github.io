import markdownToHtml from "@/utils/markdownToHtml";
import axiosInstance from "./instance"

// 모든 포스트 조회
export async function getAllPostList () {
  const data = await axiosInstance.get(`/post`)
  return data?.data;
}

// 포스트 10개만 가져오기.
export async function getCarouselPostList(){
  const data = await axiosInstance.get(`/post/carousel`)
  return data?.data;
}

// 메인 카테고리 포스트 조회
export async function getMainPostList (mainPath: string) {
  const data = await axiosInstance.get(`/post/${mainPath}`)
  return data?.data;
}

// 서브 카테고리 포스트 조회
export async function getSubPostList (mainPath: string, subPath: string) {
  const data = await axiosInstance.get(`/post/${mainPath}/${subPath}`)
  return data?.data;
}

// 단일 포스트 조회
export async function getPostContent (postId: string) {
  try{
    const data = await axiosInstance.get(`/${postId}`)
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

export async function postPosting (inputs: any) {
  const data = await axiosInstance.post(`/post`, inputs)
  return data?.data;
}

