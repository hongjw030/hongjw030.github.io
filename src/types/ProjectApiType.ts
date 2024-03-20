export interface ProjectApiType{
  _id: string;
  createdAt: string;
  updatedAt: string;
  note: number;
  title: string;
  description: string;
  coverImg: string;
  developmentUrl: string;
  githubUrl: string;
  isTeam: string;
  functions: string;
  content: string;
  term: string;
}

export type ProjectApiListType = ProjectApiType[];