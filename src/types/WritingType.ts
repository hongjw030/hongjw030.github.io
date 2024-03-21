export interface WritingPostType{
  title: string;
  mainCategory: string;
  subCategory?: string;
  coverImg?: string;
  description?: string;
  content: string;
}

export interface WritingProjectType{
  title: string;
  description: string;
  coverImg?: string;
  content: string;
  developmentUrl: string;
  githubUrl: string;
  functions: string;
  note: number;
  term: string;
  isTeam: string;
}

export interface WritingMainCategoryType{
  path: string;
  title: string;
  description?: string;
  note: number;
  coverImg?: string;
}

export interface WritingSubCategoryType extends WritingMainCategoryType{
  groupPath: string;
}