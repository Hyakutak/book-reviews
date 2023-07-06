import { InterfaceRating } from "./rating";

export interface InterfaceUser {
    id: string,
    name: string,
    email?: string,
    avatar_url?: string,
    created_at: string,
    accounts: [],
    sessions: [],
    ratings: InterfaceRating[]
}