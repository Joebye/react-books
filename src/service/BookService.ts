import { Observable } from "rxjs";
import { BookItem } from "../model/BookItem";


export default interface MovieService {
    getBooks(path: string, user: string): Observable<BookItem[]|string>;
    postBook(payload: any, user: string): Promise<BookItem>;
    updateBook(payload: any, user: string): Promise<BookItem>;


}