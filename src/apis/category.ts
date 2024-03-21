import axiosInstance from "@/apis/libs/instance"

// 카테고리 전체 조회
export async function getCategoryList () {
  const data = await axiosInstance.get(`/category`)
  return data?.data;
}