import axiosInstance from "./instance"

// 모든 프로젝트 조회
export async function getAllProjectList () {
  const data = await axiosInstance.get(`/project`)
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

