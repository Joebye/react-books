import { useEffect, useState } from "react";
import { BookItem } from "../model/BookItem";
import { bookService } from "../config/service-config";
import { Subscription } from "rxjs";

export function useSelectorBooks(path: string, owner: string) {
    const [books, setBooks] = useState<BookItem[]>([])
        useEffect(() => {
            const subscription: Subscription = bookService.getBooks(path, owner).
            subscribe({
                next(bookArray: BookItem[]|string) {
                    let errorMess: string = '';
                    if (typeof bookArray === 'string') {
                        errorMess = bookArray
                    } else {
                        setBooks(bookArray);
                    } 
                }
            })
            return () => subscription.unsubscribe();
        }, [])

    return books;
}