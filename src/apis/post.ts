import axiosInstance from "./instance"

// 모든 포스트 조회
export async function getAllPostList () {
  const data = await axiosInstance.get(`/post`)
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

export async function postPosting (inputs: any) {
  const data = await axiosInstance.post(`/post`, inputs)
  return data?.data;
}