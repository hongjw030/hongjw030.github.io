export interface CategoryType{
  id: string;
  title: string;
  description?: string;
  note: number;
  coverImg?: string;
}
export interface CategoryGroupType{
  mainCategory: CategoryType;
  subCategory: Array<CategoryType>;
}

export interface CategoryParamsType {
  params: {mainId: string}
}

export interface CategorySubParamsType {
  params: {mainId: string; subId: string;}
}