import { CategoryGroupType, MainCategoryType, SubCategoryType } from "@/types/CategoryType";

// 카테고리 리스트 적어두는 파일
const STUDY: MainCategoryType = {
  mainId: "study",
  title: "스터디",
  description: "스터디 기록."
};

const ST_CS: SubCategoryType = {
  mainId: "study",
  subId: "cs",
  title: "기술면접 스터디",
  description: "cs 면접 스터디에 대해 기록해요."
};

const ST_BOOK: SubCategoryType = {
  mainId: "study",
  subId: "book",
  title: "기술서적 스터디",
  description: "기술 서적을 읽고 배운 "
};

const STUDY_GROUP = [STUDY, [ST_CS, ST_BOOK]] as CategoryGroupType;

export default STUDY_GROUP;