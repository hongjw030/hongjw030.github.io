export interface MainCategoryApiType {
  id: number;
  pathName: string;
  title: string;
  description?: string;
}

export interface SubCategoryApiType extends MainCategoryApiType{
  mainId: number;
}

export type CategoryGroupApiType = [MainCategoryApiType, SubCategoryApiType[]] ;
