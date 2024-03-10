export interface PostFrontMatterType{
  title: string;
  mainCategory: string;
  subCategory?: string;
  coverImg?: string;
  description?: string;
}

export interface StaticPostsType {
  slug: string;
  frontmatter: PostFrontMatterType;  
  birthTime: string;
  mTime: string;
}

export interface StaticPostParamsType{
  sortedPosts: StaticPostParamsType[];
}