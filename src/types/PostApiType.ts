export interface PostApiType{
  _id: string;
  title: string;
  mainCategory: string;
  subCategory?: string;
  coverImg?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

export type PostListApiType = Array<PostApiType>;