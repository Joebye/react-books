import { Observable, Subscriber } from "rxjs";
import BookService from "./BookService"
import { BookItem } from "../model/BookItem";


export default class BookServiceImpl implements BookService {
    private baseUrl;
    private observable: Observable<BookItem[] | string> | undefined;
    private subscriber: Subscriber<BookItem[] | string> | undefined;

     constructor( baseUrl: string) {
        this.baseUrl = baseUrl;
       
}

getBooks = (path: string, user: string) => {
    this.observable = new Observable<BookItem[] | string> (subscriber => {
        this.subscriber = subscriber;
        this.subscriberNext(path, user);
    });
    return this.observable;
    }

  private subscriberNext(path: string, user: string): void {
    fetchBooks(`${this.baseUrl}${user}${path}`).then((books: any) => {
        this.subscriber?.next(books);
    }).catch((error: any) => this.subscriber?.next(error))
}

  postBook = async (payload: any, user: string) => {
    const response = await fetch(`${this.baseUrl}${user}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(payload)
    });
    const status = await response.json();
    return status;
  };

  updateBook = async (payload: any, user: string) => {
    const response = await fetch(`${this.baseUrl}${user}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(payload)
    });
    const status = response.json();
    return status;
  };



}

async function fetchBooks(url: string): Promise<BookItem[] | string> {
    const response = await fetch(url, {});
    return response.json();

}