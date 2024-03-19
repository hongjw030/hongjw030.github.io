export interface MainCategoryApiType{
  _id: string;
  path: string;
  title: string;
  description?: string;
  note: number;
  coverImg?: string;
}

export interface SubCategoryApiType extends MainCategoryApiType{
  groupPath: string;
}

export type CategoryGroupApiType = [MainCategoryApiType, Array<SubCategoryApiType>];

export type CategoryListApiType = Array<CategoryGroupApiType>;