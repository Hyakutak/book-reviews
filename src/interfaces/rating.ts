import { interfaceBook } from "./book";
import { InterfaceUser } from "./user";

export interface InterfaceRating {
    id: string,
    rate: number,
    description: string,
    created_at: string,
    book: interfaceBook[],
    book_id: string,
    user: InterfaceUser[],
    user_id: string
}