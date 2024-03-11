export interface ProjectType{
  note: number;
  title: string;
  date: string;
  description?: string;
  coverImg?: string;
  developmentUrl?: string;
  githubUrl?: string;
  members?: string;
  functions?: string;
}

export interface CategoryParamsType {
  params: {mainId: string}
}

export interface CategorySubParamsType {
  params: {mainId: string; subId: string;}
}