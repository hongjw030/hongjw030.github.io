import { CategoryGroupType, MainCategoryType, SubCategoryType } from "@/types/CategoryType";

// 카테고리 리스트 적어두는 파일
const TROUBLESHOOTING: MainCategoryType = {
  mainId: "troubleshooting",
  title: "트러블슈팅",
};

const TROUBLESHOOTING_GROUP = [TROUBLESHOOTING, []] as CategoryGroupType;

export default TROUBLESHOOTING_GROUP;