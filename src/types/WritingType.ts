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
