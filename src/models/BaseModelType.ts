import {IUser} from "./users-page-models/IUser.ts";
import {IPost} from "./posts-page-models/IPost.ts";

export type BaseModelType = {
    users: IUser[] & null;
    posts: IPost[] & null;
    total: number;
    skip: number;
    limit: number;
}