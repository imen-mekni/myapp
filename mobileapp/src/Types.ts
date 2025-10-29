 export type Comment = {
  id: string;
  username: string;
  text: string;
  timeAgo: string;
  likes: number;
  isLiked: boolean;
};

export type Post = {
  id: string;
  title: string;
  username: string;
  imageUrl: string;
  content: string;
  timeAgo: string;
  likes: number;
  comments: number;
  isLiked: boolean;
};
