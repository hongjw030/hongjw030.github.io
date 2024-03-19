export interface MainCategoryApiType{
  path: string;
  title: string;
  description?: string;
  note: number;
  coverImg?: string;
}

export interface SubCategoryApiType extends MainCategoryApiType{
  groupPath: string;
}