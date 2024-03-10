/** 네이밍 규칙
 * 대문자 없이 소문자로만 하이픈체,
 * 메인 카테고리 id를 따서 해당 그룹은 {mainid}_group,
 * 하위 카테고리 id는 {mainid}_{subid}
*/ 

import { CategoryGroupType } from "@/types/CategoryType"

const TIL_group: CategoryGroupType = {
  mainCategory:{
    id: "TIL",
    title: "나의 공부",
    description: "공부했던 것들을 모두 기록합니다.",
    note: 1,
  },
    subCategory: [
      {
        id: "TIL_book",
        title: "책 읽기",
        description: "책읽고 느꼈던 점, 배운 점을 적습니다. (기술서적 위주)",
        note: 1,
        // coverImg: "string",
      },
      {
        id: "TIL_blog",
        title: "블로그 만들기",
        description: "직접 블로그 홈페이지 만드는 과정.",
        note: 2,
        // coverImg: "string",
      }
    ]
  // coverImg: "string",
  
}

const algorithm_group: CategoryGroupType = {
  mainCategory:{
    id: "algorithm",
    title: "알고리즘",
    description: "알고리즘 공부 내용을 기록합니다.",
    note: 2,
  },
  subCategory: [
    {
      id: "algorithm_study",
      title: "공부 기록",
      description: "자료구조 및 알고리즘에 대한 공부 내용.",
      note: 1,
      // coverImg: "string",
    },
    {
      id: "algorithm_problem",
      title: "문제 풀이",
      description: "직접 알고리즘 문제를 풀고 기록해요. 주력 언어는 JS, TS.",
      note: 2,
      // coverImg: "string",
    }
  ]
  // coverImg: "string",
}

const study_group: CategoryGroupType = {
  mainCategory:{
    id: "study",
    title: "스터디",
    description: "스터디 내용을 정리해요.",
    note: 3,
  },
  subCategory: [
    {
      id: "study_cs",
      title: "기술 면접 스터디",
      description: "기술 면접에 대해 스터디한 내용을 남겨요.",
      note: 1,
      // coverImg: "string",
    },
    {
      id: "study_modernreact",
      title: "모던 리액트 딥다이브 스터디",
      description: "모던 리액트 딥다이브를 공부하고 글을 남겨요.",
      note: 2,
      // coverImg: "string",
    }
  ]
  // coverImg: "string",
}

const troubleshooting_group: CategoryGroupType = {
  mainCategory:{
    id: "troubleshooting",
    title: "트러블슈팅",
    description: "트러블슈팅, 에러 경험에 대해 적습니다.",
    note: 4,
  },
  subCategory: []
  // coverImg: "string",
}

const diary_group: CategoryGroupType = {
  mainCategory:{
    id: "diary",
    title: "회고",
    description: "회고를 기록해요.",
    note: 5,
  },
  subCategory: [
    {
      id: "diary_weekly",
      title: "주간 회고",
      description: "매주 일요일 회고를 남겨요.",
      note: 1,
      // coverImg: "string",
    },
    {
      id: "diary_monthly",
      title: "월간 회고",
      description: "매달 마지막 날 회고를 남겨요.",
      note: 2,
      // coverImg: "string",
    }
  ]
  // coverImg: "string",
}

const CATEGORY_ARRAY: CategoryGroupType[] = [TIL_group, algorithm_group, study_group, troubleshooting_group, diary_group]

export default CATEGORY_ARRAY;