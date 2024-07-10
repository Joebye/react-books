import BookServiceImpl from "../service/BookServiceImpl";
import bookConf from './book-config.json';
const {baseUrl} = bookConf;

export const bookService = new BookServiceImpl(baseUrl)
