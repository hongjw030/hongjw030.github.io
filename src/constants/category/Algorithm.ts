import { CategoryGroupType, MainCategoryType, SubCategoryType } from "@/types/CategoryType";

// 카테고리 리스트 적어두는 파일
const ALGORITHM: MainCategoryType = {
  mainId: "algorithm",
  title: "알고리즘",
  description: "알고리즘을 공부하고 글을 올립니다."
};

const AL_STUDY: SubCategoryType = {
  mainId: "algorithm",
  subId: "study",
  title: "공부기록",
  description: "알고리즘을 공부하고 글을 올립니다."
};

const AL_PROBLEM: SubCategoryType = {
  mainId: "algorithm",
  subId: "problem",
  title: "문제풀이",
  description: "js, ts 주력으로 문제를 풀고 올립니다."
};

const ALGORITHM_GROUP = [ALGORITHM, [AL_STUDY, AL_PROBLEM]] as CategoryGroupType;

export default ALGORITHM_GROUP;