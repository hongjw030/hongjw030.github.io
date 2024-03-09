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