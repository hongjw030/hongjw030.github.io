export interface MainCategoryApiType {
  id: number;
  pathName: string;
  title: string;
  description?: string;
}

export interface SubCategoryApiType extends MainCategoryApiType{
  mainId: number;
}

export interface CategoryApiType {
  id: string;
  title: string;
  description?: string;
}

export type CategoryGroupApiType = [CategoryApiType, CategoryApiType[]] ;
