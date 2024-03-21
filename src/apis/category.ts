import axiosInstance from "@/apis/libs/instance"

// 카테고리 전체 조회
export async function getCategoryList () {
  const data = await axiosInstance.get(`/category`)
  return data?.data;
}

// 카테고리 단일 조회
export async function getCategoryData (mainPath: string, subPath?: string) {
  const queries = `?mainPath=${mainPath}${subPath ? `&subPath=${subPath}` : ""}`
  const data = await axiosInstance.get(`/category${queries}`)
  return data?.data;
}