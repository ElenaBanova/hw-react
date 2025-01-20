import {IUser} from "./IUsers.ts";

export interface IUserResponse {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}