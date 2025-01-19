export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IPostsReactions;
    views: number;
    userId: number;
}

export interface IPostsReactions {
    likes: number;
    dislikes: number;
}
