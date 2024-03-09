export interface PostFrontMatterType{
  title: string;
  mainCategory: string;
  subCategory?: string;
  coverImg?: string;
  date: string;
  toc?: boolean
  description?: string;
}

export interface StaticPostsType {
  slug: string;
  frontmatter: PostFrontMatterType;  
}

export interface StaticPostParamsType{
  sortedPosts: StaticPostParamsType[];
}