import axiosInstance from "./instance"

// 모든 프로젝트 조회
export async function getAllProjectList () {
  const data = await axiosInstance.get(`/project`)
  return data?.data;
}

// 포스트 10개만 가져오기.
export async function getCarouselProjectList(){
  const data = await axiosInstance.get(`/project/carousel`)
  return data?.data;
}

// 단일 프로젝트 조회
export async function getProjectContent (projectId: string) {
  try{
    const data = await axiosInstance.get(`/project/${projectId}`)
    return data?.data;
  }catch(e){
    return e;
  }
}

export async function postProject (inputs: any) {
  const data = await axiosInstance.post(`/project`, inputs)
  return data?.data;
}

