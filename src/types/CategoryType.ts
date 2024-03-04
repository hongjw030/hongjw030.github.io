export interface MainCategoryType {
  mainId: string;
  title: string;
  description?: string;
}

export interface SubCategoryType extends MainCategoryType{
  subId: string;
}

export type CategoryGroupType = [MainCategoryType, SubCategoryType[]];
