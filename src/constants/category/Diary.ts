import { CategoryGroupType, MainCategoryType, SubCategoryType } from "@/types/CategoryType";

// 카테고리 리스트 적어두는 파일
const DIARY: MainCategoryType = {
  mainId: "diary",
  title: "회고",
  description: "회고를 모아서 볼 수 있어요."
};

const DI_DAILY: SubCategoryType = {
  mainId: "diary",
  subId: "daily",
  title: "일간 회고",
  description: "데일리 회고. keep, problem, try 형식을 지켜요."
};

const DI_WEEKLY: SubCategoryType = {
  mainId: "diary",
  subId: "weekly",
  title: "주간 회고",
  description: "주간 회고. keep, problem, try 형식을 지켜요. 매주 일요일에 올립니다."
};

const DI_MONTHLY: SubCategoryType = {
  mainId: "diary",
  subId: "monthly",
  title: "월간 회고",
  description: "월간 회고. keep, problem, try 형식을 지켜요. 매달 마지막 날에 올립니다."
};

const DIARY_GROUP =  [DIARY, [DI_DAILY, DI_WEEKLY, DI_MONTHLY]] as CategoryGroupType;

export default DIARY_GROUP;