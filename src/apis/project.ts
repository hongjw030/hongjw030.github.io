import axiosInstance from "@/apis/libs/instance"

interface getProjectListProps {
  cursor?: string;
  count?: number;
}

// 모든 프로젝트 조회
export async function getProjectList ({cursor, count=10}: getProjectListProps) {
  let queries = `?count=${count}${cursor ? `&cursor=${cursor}` : ""}`
  const data = await axiosInstance.get(`/project${queries}`)
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
