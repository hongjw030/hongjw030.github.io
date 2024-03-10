export interface CategoryType{
  id: string;
  title: string;
  description?: string;
  note: number;
  coverImg?: string;
}

export interface CategoryNumType extends CategoryType{
  count: number;
}

export interface CategoryGroupType{
  mainCategory: CategoryType;
  subCategory: Array<CategoryType>;
}

export interface CategoryGroupNumType{
  mainCategory: CategoryNumType;
  subCategory: Array<CategoryNumType>;
}

export interface CategoryParamsType {
  params: {mainId: string}
}

export interface CategorySubParamsType {
  params: {mainId: string; subId: string;}
}