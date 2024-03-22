export interface SmallCardType {
  title: string;
  coverImg?: string;
  createdAt: string;
  description: string;
  _id: string;
}

export type CardType = "post" | "project"